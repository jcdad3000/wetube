export const getHome = (req, res) => {
  const fs = require("fs");

  fs.readdir("uploads", (err, files) => {
    if (err) throw err;

    return res.render("home", { files });
  });
};

export const postHome = (req, res) => {
  return res.send("hi");
};
export const readTxt = (req, res) => {
  const { id } = req.params;
  const fileUrl = `uploads/${id}`;
  const fs = require("fs");

  fs.readFile(fileUrl, (err, data) => {
    if (err) throw err;
    return res.render("read", { data });
  });
};

export const postReadTxt = (req, res) => {
  const fs = require("fs");
  const { path: fileUrl } = req.file;

  fs.readFile(fileUrl, (err, data) => {
    if (err) throw err;
    return res.render("read", { data });
  });

  //return res.render("read", text);
  //const text = fs.readFile("/uploads/")
};
