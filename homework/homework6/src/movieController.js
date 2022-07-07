import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

export const getAdd = (req, res) => {
  return res.render("add");
};
export const postAdd = (req, res) => {
  const { title, synopsis, genres } = req.body;
  const movie = { title, synopsis, genres: genres.split(",") };
  addMovie(movie);

  return res.redirect("/");
};
/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
