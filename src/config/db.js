const mongoose = require("mongoose");

// MONGO DB CONNECTION
const DB = "fake";
const PORT = "27017";
const HOST = process.env.DB_HOST || "localhost";
// const db = "mongodb://localhost:27017/docker"; // Localhost
const db = `mongodb://${HOST}:${PORT}/${DB}`; // Docker

const mongoConnection = () => {
  mongoose
    .connect(db)
    .then(() => console.log(`Mongo DB Connected`))
    .catch((err) => console.log(err));
};

module.exports = mongoConnection;
