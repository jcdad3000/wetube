import express from "express";
import {
  delete_movie,
  getEdit_movie,
  movie,
  postEdit_movie
} from "./movieController";

const detailRouter = express.Router();

detailRouter.get("/:id", movie);
detailRouter.route("/:id/edit").get(getEdit_movie).post(postEdit_movie);
detailRouter.get("/:id/delete", delete_movie);

export default detailRouter;
