const { Router } = require("express");
const User = require("../models/User");
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const router = Router();
const authMiddleware = require("../middleware/auth.middleware");

router.get("/auth", authMiddleware, async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.user.id });
		const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
			expiresIn: "1h",
		});
		return res.json({
			token,
			user: {
				id: user.id,
				email: user.email,
				contact: user.contact,
			},
		});
	} catch (error) {
		res.send({ message: "Server Error" });
	}
});

router.post(
	"/registration",
	[
		check("email", "Uncorrect email").isEmail(),
		check(
			"password",
			"Password must be longer than 3 and shorter than 12",
		).isLength({ min: 3, max: 12 }),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res
					.status(400)
					.json({ message: "Uncorect request", errors });
			}
			const { email, password } = req.body;
			const candidate = await User.findOne({ email });

			if (candidate) {
				return res.status(400).json({
					message: `User with email ${email} alredy exist`,
				});
			}
			const hashPassword = await bcrypt.hash(password, 5);

			const user = new User({ email, password: hashPassword });

			user.save();
			return res.status(201).json({ message: "user was created" });
		} catch (error) {
			res.send({ message: "Server Error" });
		}
	},
);

router.post(
	"/login",
	[
		check("email", "Uncorrect email").isEmail(),
		check("password", "Incorrect password").exists(),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res
					.status(400)
					.json({ message: "Uncorect request", errors });
			}

			const { email, password } = req.body;

			const user = await User.findOne({ email });

			if (!user) {
				return res.status(400).json({ message: "User not found" });
			}

			const isPassValid = bcrypt.compareSync(password, user.password);
			if (!isPassValid) {
				return res.status(400).json({ message: "Invalid password" });
			}
			const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
				expiresIn: "24h",
			});

			return res.json({
				token,
				user: {
					id: user.id,
					email: user.email,
					contact: user.contact,
				},
			});
		} catch (error) {
			return res.json({ message: "Server Error" });
		}
	},
);

module.exports = router;
