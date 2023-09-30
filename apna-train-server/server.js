import express from "express";

import bookingRoute from "./routes/bookingRoute.js";

import dbconfig from "./db.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/booking", bookingRoute);
app.use("/api/pnr",bookingRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
