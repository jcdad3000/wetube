import express from "express";
import { getUpload, home, postUpload, search_movie } from "./movieController";

const movieRouter = express.Router();

// Add your magic here!

movieRouter.get("/", home);
movieRouter.route("/upload").get(getUpload).post(postUpload);
movieRouter.get("/search", search_movie);

export default movieRouter;
