const { Schema, model, Types } = require("mongoose");

const Contacts = new Schema({
	owner: { type: Types.ObjectId, ref: "User" },
	name: { type: String, required: true },
	phoneNumber: { type: String, required: true },
});

module.exports = model("Contacts", Contacts);
