const express = require("express");
const cors = require ("cors");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
app.use(cors());

// Mongo DB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google-books");

// Starting API
app.listen(PORT, function() {
  console.log(`Now listening on PORT ${PORT}!`);
});