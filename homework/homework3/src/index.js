import express from "express";
import globalRouter from "./routers/globalRouter";
import storyRouter from "./routers/storyRouter";
import userRouter from "./routers/userRouter";

const app = express();

app.use("/", globalRouter);
app.use("/story", storyRouter);
app.use("/user", userRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
