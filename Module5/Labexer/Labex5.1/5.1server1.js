const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("I am server 1!");
});

app.get("/test", (req, res) => {
    res.send("Test for server 1 good!");
})

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});