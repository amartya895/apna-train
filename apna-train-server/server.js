import express from "express";

import bookingRoute from "./routes/bookingRoute.js";
import trainRoute from "./routes/trainRoute.js";
import userRoute from "./routes/userRoute.js"
import travellerRoute from "./routes/travellerRoute.js"
import cors from "cors";
import cookieParser from 'cookie-parser';
import chatRoute from "./routes/chatRoute.js";
// import {restrictToLoggedinUserOnly} from "./middlewares/auth.js"
import messageRoute from "./routes/messageRoute.js";

import dbconfig from "./db.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended:false}));

app.use(
  cors({
    origin: "https://apna-train.vercel.app", //this is for deployed version
    // origin: "http://localhost:3000", // this is for local development
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
app.use("/api/chat",chatRoute);
app.use("/api/message",messageRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
