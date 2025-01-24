import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res)=> {
    res.send("Welcome to the server - GET")
})
app.post("/", (req, res)=> {
    res.send("Welcome to the server - POST")
})
app.put("/", (req, res)=> {
    res.send("Welcome to the server - PUT")
})
app.delete("/", (req, res)=> {
    res.send("Welcome to the server - DELETE")
})

// (youtube link)
// DOMAIN /endpoint
// 1h:3000/watch



app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT} `)
})