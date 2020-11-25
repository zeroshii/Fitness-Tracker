const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

console.log('Connecting to MONGO...', process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// routes
require("./config/api-routes.js")(app);
require("./config/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`Fitness Tracker running on port: ${PORT}!`);
});
