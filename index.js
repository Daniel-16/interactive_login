const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/router");
const getUserRouter = require("./routes/getUser.router");
const app = express();
require("dotenv").config;
//Middleware
app.use(express.json());
app.use(cors());
app.use("/api/auth", router);
app.use("/api", getUserRouter);

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/interactive-login", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `Server started successfully at port ${process.env.PORT || 3000}`
      );
    });
  })
  .catch((err) => {
    console.error(err);
  });
