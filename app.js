const express = require("express");

const userRoute = require("./route/user-route");

const app = express();
const POST = 8000;

//const userRouter = require('./routes/user');

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  //res.setHeader("X-App-Type", "2");
  next();
});

app.use("/users", userRoute);

app.use((req, res) => {
  return res.status(404).send({
    success: false,
    message: "Route not found!",
  });
});

app.listen(POST);
