/*
You DONT have to import the User with your username.
Because it's a default export we can nickname it whatever we want.
So import User from "./models"; will work!
You can do User.find() or whatever you need like normal!
*/
import User from "./models/User";
import bcrypt from "bcrypt";

// Add your magic here!

export const home = async (req, res) => {
  if (!req.session.loggedIn) {
    return res.redirect("/login");
  }
  const user = req.session.user;
  return res.render("home", { pageTitle: "Home", user });
};
export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username });

  if (!user) {
    return res
      .status(400)
      .render("login", { pageTitle, errorMessage: "Wrong ID" });
  }

  const ok = await bcrypt.compare(password, user.password);

  if (!ok) {
    return res
      .status(400)
      .render("login", { pageTitle, errorMessage: "Wrong Password" });
  }

  req.session.loggedIn = true;
  req.session.user = user;

  return res.redirect("/");
};
export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const { username, name, password, password2 } = req.body;
  const exists = await User.findOne({ username });
  const pageTitle = "Join";

  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Wrong password confirmation"
    });
  }
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Username alrady Taken"
    });
  }

  try {
    await User.create({
      username,
      name,
      password
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: error._message
    });
  }
};
