import express from "express";
import { textUpload } from "./middlewares";
import { getHome, postReadTxt, readTxt } from "./rootController";

const rootRouter = express.Router();

rootRouter.get("/", getHome);
rootRouter.route("/read").post(textUpload.single("text"), postReadTxt);
rootRouter.get("/read/:id", readTxt);
export default rootRouter;
