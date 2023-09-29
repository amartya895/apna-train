import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const mongoUrl = process.env.MONGODB_URL;

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

export default mongoose;
