import express from "express";
import { users, id, editProfile } from "../controllers/userController";
const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get("/edit-profile", editProfile);
userRouter.get("/:id", id);

export default userRouter;
