const app = require("./app.js");
const mongoose = require("mongoose");
const database = "expenses";
const url = `mongodb://localhost:27018/${database}`;

mongoose
  .connect(url)
  .then(() => console.log("Successfully connected to database"))
  .catch((error) => console.log(error.message));

app.listen(8000, () => {
  console.log("Server running on 8000");
});
