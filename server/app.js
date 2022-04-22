const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routes/auth.routes");
const contactRouter = require("./routes/contact.routes");
const PORT = config.get("serverPort");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function cors(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});

app.use("/api/auth", authRouter);
app.use("/api", contactRouter);

const start = async () => {
	try {
		await mongoose.connect(config.get("dbUrl"), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});

		app.listen(PORT, () => console.log(`Server has been started ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();
