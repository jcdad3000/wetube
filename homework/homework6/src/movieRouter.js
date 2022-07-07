import express from "express";
import { getAdd, home, movieDetail, postAdd } from "./movieController";

const movieRouter = express.Router();

// create the '/' route
// create the /:id route
// create the /add route (GET + POST)

movieRouter.get("/", home);
movieRouter.route("/add").get(getAdd).post(postAdd);
movieRouter.get("/:id", movieDetail);

export default movieRouter;
