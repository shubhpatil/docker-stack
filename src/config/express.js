const express = require("express");
const path = require("path");
const cors = require("cors");

const mongoConnection = require("./db");
const routes = require("../routes/routes");

const app = express();

// CORS
app.use(cors());

// BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MONGO DB CONNECTION
mongoConnection();

// REACT STATIC FILES
app.use(express.static(path.join(__dirname, "../../frontend/build")));

// ROUTES
app.use("/api/v1", routes);

module.exports = app;
