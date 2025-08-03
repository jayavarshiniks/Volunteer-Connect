import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server started on PORT:", port);
  });
});

app.get("/", (req, res) => {
  res.send("Working!!");
});
