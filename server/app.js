const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routes/auth.routes");
const contactRouter = require("./routes/contact.routes");

//const corsMiddleware = require("./middleware/cors.middleware");
const app = express();

//app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api", contactRouter);

const PORT = config.get("serverPort");

const start = async () => {
	try {
		await mongoose.connect(config.get("dbUrl"));

		app.listen(PORT, () => console.log(`Server has been started ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();
