const mongoose = require("mongoose");

const connect = () => {
  // const url = `mongodb://${process.env.MONGODB_USER}:${
  //   process.env.MONGODB_PASS
  // }@${process.env.MONGODB_URL}`;

  // const url= 'mongodb://localhost/restaurant';
  const url = 'mongodb://localhost/' + process.env.MONGODB_NAME;
  const options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 5,
    useNewUrlParser: true
  };

  mongoose.connect(url, options);
  mongoose.set("useCreateIndex", true);

  mongoose.connection.on("error", err => {
    console.log("Database connection error: " + err);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Application disconnected from the database!");
  });
  mongoose.connection.on("connected", () => {
    console.log("Application connected to the database!");
  });
};

module.exports = {
  connect
};
