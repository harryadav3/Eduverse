import express from "express";

const app = express();

console.log("solona");
// Define a simple route to return "Hello, world!"
app.get("/", (req, res) => {
  res.send("Hello, terminal");
});

export default app;
