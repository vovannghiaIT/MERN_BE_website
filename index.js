const express = require("express");
import cors from "cors";
require("dotenv").config();
const mongoose = require("mongoose");
import connectDB from "./src/config/ConnectDB";
import initRouters from "./src/routers";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
initRouters(app);
connectDB();

const port = process.env.PORT || 8888;

const listener = app.listen(port, () => {
  console.log(`server is running on the port ${listener.address().port}`);
});
