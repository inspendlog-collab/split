const express = require("express");
let server = express();
let app = express.Router();

app.get("/", (req, res) => {
	console.log("Test");
	res.send("hello");
});

app.get("/:id", (req, res) => {
	console.log("Test");
	res.send("hello");
});

app.post("/",(req, res)=>{
	console.log("Rest");
});
server.use(app);
server.listen(3002, () => {
	console.log("Running The Server");
});