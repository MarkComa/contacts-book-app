const { Schema, model } = require("mongoose");

const Contacts = new Schema({
	name: { type: String, required: true },
	phoneNumber: { type: String, required: true },
});

module.exports = model("Contacts", Contacts);
