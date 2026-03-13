const express = require("express");

//=== Server 1 configuration ====
const app1 = express();
const port1 = 3005;

app1.get('/', (req, res) => {
    res.send("I am server 1!");
});

app1.get("/test", (req, res) => {
    res.send("Test for server 1 good!");
});


//=== Server 2 configuration ===
const app2 = express();
const port2 = 3014;

app2.get('/', (req, res) => {
    res.send("I am server 2!");
});

app2.get("/test", (req, res) => {
    res.send("Test for server 2 good!");
});



//====Message of servers running====

app1.listen(port1, () => {
    console.log(`Running at 🛰️ http://localhost:${port1}`);
});

app2.listen(port2, () => {
    console.log(`Running at 🛰️ http://localhost:${port2}`);
});