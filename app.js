const express = require("express");
const os = require("os");

const app = express();

app.get("/", (req, res, next) => {
	return res.status(200).json({
		name: "Michael Nandi",
		status: "Api working",
		message: `Hello from ${os.hostname}`,
	});
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
