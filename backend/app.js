const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const router = require("./router/mainRouter");
app.listen(4000);
console.log("server started on port 4000");
mongoose
  .connect(
    "mongodb+srv://berunkelis:m5NiXthuyTggPS5W@cluster0.kmy7rzf.mongodb.net/?retryWrites=true&w=majority"
  ) //pakeisti username ir pass
  .then((res) => console.log("DataBase connected"))
  .catch((e) => console.log(e));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  })
);
app.use(express.json());
app.use(
  session({
    secret: "O$X=p2;LXC>+0kbEpuJBr9iiqi|r",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
);
app.use("/", router);
