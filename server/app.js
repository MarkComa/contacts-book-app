const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routes/auth.routes");
const contactRouter = require("./routes/contact.routes");
const PORT = config.get("serverPort");
const app = express();

app.use(function cors(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
});

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api", contactRouter);

const start = async () => {
	try {
		await mongoose.connect('mongodb+srv://markcoma:1793252mD@contactsbook.ujpmh.mongodb.net/contactsbook?retryWrites=true&w=majority', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex:true,
			useFindAndModify:true
			
		});

		app.listen(PORT, () => console.log(`Server has been started ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();
