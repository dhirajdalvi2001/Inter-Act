const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT;

app.get("/", (req, res) => {});

app.use("/api/user", userRoutes);

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   console.log(req.params);
//   const singleChat = chats.find((e) => e._id === req.params.id);
//   res.send(singleChat);
//   res.send(`Server Started on ${PORT}!`);
// });

app.listen(PORT, console.log(`Server Started on ${PORT}!`.yellow.bold));
