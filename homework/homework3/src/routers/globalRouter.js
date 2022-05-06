import express from "express";
import { home, trending } from "../controllers/storyController";
import { newUser, join, login } from "../controllers/userController";
const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", newUser);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
export default globalRouter;
