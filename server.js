const express = require("express");
const bodyPaser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

app.get("/api/users", (req, res) => {
  res.send([]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
