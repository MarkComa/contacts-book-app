const Router = require("express");
const User = require("../models/User");
const router = new Router();
const mongoose = require("mongoose");

//Получить массив контактов из бд
const CONTACTS = User.find({}, function (err, docs) {
	mongoose.disconnect();
	if (err) return console.log(err);
	console.log(docs);
});

//GET
router.get("/contacts", (req, res) => {
	try {
		res.status(200).json(CONTACTS);
	} catch (e) {
		console.log(e);
	}
});

//POST
router.post("/contacts", (req, res) => {
	const contact = { ...req.body, id: v4(), marked: false };
	CONTACTS.push(contact);
	res.status(201).json(contact);
});
//DELETE
router.delete("/contacts/:id", (req, res) => {
	CONTACTS = CONTACTS.filter((c) => c.id !== req.params.id);
	res.status(200).json({ message: "Контакт был удален" });
});
//PUT
router.delete("/contacts/:id", (req, res) => {
	const idx = CONTACTS.findIndex((c) => c.id === req.params.id);
	CONTACTS[idx] = req.body;
	res.json(CONTACTS.idx);
});
module.exports = router;
