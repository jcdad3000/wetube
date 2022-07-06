import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = async (req, res) => {
  try {
    const movies = getMovies();
    res.render("home", { pageTitle: "Movies!", movies });
  } catch (error) {
    return res.render("server-error", { error });
  }
};
export const movieDetail = (req, res) => {
  const { id } = req.params;
  const movie = getMovieById(id);
  return res.render("movie", { pageTitle: movie.title, movie });
};

export const filterMovie = (req, res) => {
  const { year, rating } = req.query;
  if (year) {
    const movies = getMovieByMinimumYear(year);
    return res.render("filter", { pageTitle: "Search by Year", movies, year });
  }
  if (rating) {
    const movies = getMovieByMinimumRating(rating);
    return res.render("filter", {
      pageTitle: "Search by Rating",
      movies,
      rating
    });
  }
  return res.redirect("/");
};
