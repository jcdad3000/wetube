import express from "express";
import {
  storyId,
  storyIdDelete,
  storyIdEdit
} from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id", storyId);
storyRouter.get("/:id/edit", storyIdEdit);
storyRouter.get("/:id/delete", storyIdDelete);
export default storyRouter;
