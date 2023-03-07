const express = require("express");
const routes = require("./routes/routes");
const db = require("./db/db");
app = express();
db();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, () =>
  console.log("connected on port 3000")
);
