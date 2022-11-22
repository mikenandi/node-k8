const express = require("express");
const fetch = require("node-fetch");
const os = require("os");

const app = express();

app.get("/", (req, res, next) => {
	return res.status(200).json({
		name: "Michael Nandi",
		status: "Api working",
		message: `Hello from ${os.hostname}`,
	});
});

app.get("/nginx", async (req, res, next) => {
	let url = "http://nginx";
	let response = await fetch(url);
	let body = await response.text();

	return res.send(body);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
