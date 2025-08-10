import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import createUserRouter from '../Routes/CreateUser.js';
import createOrganizerRouter from '../Routes/CreateOraganization.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api',createUserRouter);
app.use('/api',createOrganizerRouter);
connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server started on PORT:", port);
  });
});

app.get("/", (req, res) => {
  res.send("Working!!");
});
