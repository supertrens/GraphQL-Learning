const mongoose = require("mongoose");

// Connection url
const url = "mongodb://localhost:27017";
const dbName = "/graphql";

mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(url + dbName);

const db = mongoose.connection;

db.on("open", function() {
  console.log("App is connected to the database");
});

db.on("error", function(err) {
  console.log(err);
});

module.exports = { mongoose };
