export const home = (req, res) => res.send("Home Page");
export const trending = (req, res) => res.send("Trending");
export const storyId = (req, res) => res.send(`Story ID: #${req.params.id}`);
export const storyIdEdit = (req, res) => {
  console.log("hello");
  res.send(`Story ID: #${req.params.id} is Edited`);
};
export const storyIdDelete = (req, res) =>
  res.send(`Story ID: #${req.params.id}is Deleted`);
