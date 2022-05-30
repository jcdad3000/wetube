import "./db.js";
import "./models/Video";
import app from "./server";

const PORT = 4001;

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
);
