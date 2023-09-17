import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import loginRoute from "./routes/login.js";
import addRoute from "./routes/add.js";

const app = express();
const PORT = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "../public/index.html"));
});

app.get("/welcome", (req, res) => {
  res.sendFile(path.join(process.cwd(), "../public/welcome.html"));
});

app.use("/", loginRoute);
app.use("/welcome", addRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
