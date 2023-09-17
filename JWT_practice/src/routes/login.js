import express from "express";
import jwt from "jsonwebtoken";

const routeLogin = express.Router();

const getUser = async (username) => {
  return { id: 1, password: "admin", username };
};

routeLogin.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await getUser(username);
  if (user.password !== password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  delete user.password;
  const token = jwt.sign(user, 'secret', {
    expiresIn: 1000 * 60,
  });
  res.cookie("token", token);
  console.log("token: ", req.cookie);
  return res.redirect("/welcome");
});

export default routeLogin;
