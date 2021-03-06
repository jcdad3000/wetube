import "dotenv/config";
import "./db.js";
import "./models/Video";
import "./models/User";
import "./models/Comment";

import app from "./server";

const PORT = 4000;

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
);
