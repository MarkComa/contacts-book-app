const Router = require("express");
const router = new Router();
const Contacts = require("../models/Contacts");

//GET
router.get("/contacts", async (req, res) => {
	try {
		const { userId } = req.query;
		const contacts = await Contacts.find({ owner: userId });
		res.json(contacts);
	} catch (e) {
		console.log(e);
	}
});

//POST
router.post("/contacts", async (req, res) => {
	try {
		const { name, phoneNumber, userId } = req.body;

		const contact = new Contacts({ owner: userId, name, phoneNumber });
		await contact.save();
		res.json(contact);
	} catch (error) {
		console.log(error);
	}
});

//DELETE
router.delete("/contacts/:id", async (req, res) => {
	try {
		const contact = await Contacts.findOneAndDellete({
			_id: req.params.id,
		});
		res.json(contact);
	} catch (error) {
		console.log(error);
	}

	CONTACTS = CONTACTS.filter((c) => c.id !== req.params.id);
	res.status(200).json({ message: "Контакт был удален" });
});

module.exports = router;
