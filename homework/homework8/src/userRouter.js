import express, { application } from "express";
import { getJoin, getLogin, home, postJoin, postLogin } from "./userController";

const userRouter = express.Router();

// Add your magic here!
userRouter.get("/", home);
userRouter.route("/login").get(getLogin).post(postLogin);
userRouter.route("/join").get(getJoin).post(postJoin);

export default userRouter;
