const Router = require("express");
const router = new Router();
const Contacts = require("../models/Contacts");

//GET
router.get("/contacts", async (req, res) => {
	try {
		const { userId } = req.query;
		const contacts = await Contacts.find({ owner: userId });
		return res.json({
			contacts: contacts,
		});
	} catch (e) {
		console.log(e);
	}
});

//POST
router.post("/contacts", async (req, res) => {
	try {
		const { name, phoneNumber, owner } = req.body;

		const contact = new Contacts({ owner, name, phoneNumber });

		await contact.save();

		return res.json(contact);
	} catch (error) {
		console.log(error);
	}
});
router.post("/contacts/edit", async (req, res) => {
	try {
		const { id, name, phoneNumber, owner } = req.body;
		const contact = await Contacts.findOneAndUpdate(
			{ _id: id, owner: owner },
			{ $set : {name: name, phoneNumber: phoneNumber }}, {
				returnDocument: 'after'
			}
		);
		return res.status(200).json({ owner: owner, id: id, message: "Контакт был обновлен" });
	} catch (error) {
		console.log(error);
	}
});

//DELETE
router.delete("/contacts", async (req, res) => {
	try {
		const { id } = req.query;
		const contact = await Contacts.findOneAndDelete({
			_id: id,
		});
		res.status(200).json({ id: id, message: "Контакт был удален" });
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
