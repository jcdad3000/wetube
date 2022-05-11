import express from "express";
import { home, movieDetail, filterMovie } from "./movieController";

const movieRouter = express.Router();

export default movieRouter;
