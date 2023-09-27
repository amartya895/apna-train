const mongoose = require("mongoose");
require("dotenv").config();
const mongoUrl = `mongodb+srv://amartyasen895:${process.env.MONGODB_PASSWORD}@apnatraincluster.d1ryp3r.mongodb.net/APNA-TRAIN`;

mongoose.connect(mongoUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("MongoDb connection failed");
});

connection.on("connected", () => {
  console.log("Mongodb connected Successfully");
});

module.exports = mongoose;
