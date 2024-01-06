import express from "express";

import bookingRoute from "./routes/bookingRoute.js";
import trainRoute from "./routes/trainRoute.js";
import userRoute from "./routes/userRoute.js"
import travellerRoute from "./routes/travellerRoute.js"
import cors from "cors";
import cookieParser from 'cookie-parser';
// import {restrictToLoggedinUserOnly} from "./middlewares/auth.js"

import dbconfig from "./db.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(
  cors({
    // origin: "https://renter-khaki.vercel.app", //this is for deployed version
    origin: "http://localhost:3000", // this is for local development
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use("/api/booking", bookingRoute);
app.use("/api/pnr",bookingRoute);
app.use("/api/train" , trainRoute);
app.use("/api/auth" , userRoute);
app.use("/api/user",travellerRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
