import multer from "multer";

export const textUpload = multer({
  dest: "uploads/",
  limits: { fileSize: 13000000 }
});
