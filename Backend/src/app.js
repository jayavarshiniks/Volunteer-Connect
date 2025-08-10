import dotenv from "dotenv";
import express from "express";
import postRoutes from '../src/routes/postRoutes.js';
import { connectDB } from "./config/db.js";
import UserRoutes from './routes/UserRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

//routes
app.use('/api/user',UserRoutes);
app.use('/api/post', postRoutes)

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server started on PORT:", port);
  });
});

// app.get("/", (req, res) => {
//   res.send("Working!!");
// });
