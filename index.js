const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/router");
const getUserRouter = require("./routes/getUser.router");
const app = express();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
//Middleware
app.use(express.json());
app.use(cors());
app.use("/api/auth", router);
app.use("/api", getUserRouter);
// console.log(process.env.MONGODB_URI);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URI, {
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
