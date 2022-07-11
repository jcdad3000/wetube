/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

export const home = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({ createdAt: "desc" });
    return res.render("home", { pageTitle: "Home", movies });
  } catch (error) {
    return res.render("server-error", { error });
  }
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};
export const postUpload = async (req, res) => {
  const { title, summary, year, rating, genres } = req.body;
  try {
    const newMovie = await Movie.create({
      title,
      summary,
      year,
      rating,
      genres: Movie.formatGenres(genres)
    });
    console.log(newMovie);
    return res.redirect("/");
  } catch (error) {
    return res
      .status(400)
      .render("upload", { pageTitle: "Upload", errorMessage: error._message });
  }
};
export const search_movie = async (req, res) => {
  const { keyword } = req.query;
  let movies = [];
  if (keyword) {
    movies = await Movie.find({
      title: {
        $regex: new RegExp(keyword, "i")
      }
    });
  }

  return res.render("search", { pageTitle: "Search", movies });
};

export const movie = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);
    return res.render("movie", { pageTitle: `${movie.title}`, movie });
  } catch (error) {}
};
export const getEdit_movie = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);
    return res.render("edit", { pageTitle: `${movie.title} Edit`, movie });
  } catch (error) {
    console.log(error);
  }
};
export const postEdit_movie = async (req, res) => {
  const { title, summary, year, rating, genres } = req.body;
  const { id } = req.params;
  try {
    await Movie.findByIdAndUpdate(id, {
      title,
      summary,
      year,
      rating,
      genres: Movie.formatGenres(genres)
    });
    return res.redirect("/");
  } catch (error) {}
};
export const delete_movie = async (req, res) => {
  const { id } = req.params;
  try {
    await Movie.findByIdAndDelete(id);
    return res.redirect("/");
  } catch (error) {}
};

// Add your magic here!
