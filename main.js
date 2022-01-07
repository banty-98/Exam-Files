const express = require("express");
const app = express();
app.use(express.json());



const { add_msg, show_msg } = require("./user");

app.get("/users1", async(req, res) => {
    const list = await show_msg();
    res.json(list);
});

app.post("/add-user1", async(req, res) => {
    const user = req.body;
    await add_msg(user);
    res.json({ message: "Added Successfully" });
});

app.listen(4000, () => console.log("this is optional, server started"));