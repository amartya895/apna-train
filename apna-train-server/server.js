const express = require('express');

const dbconfig = require('./db.js');

const pnrStatusRoute = require('./routes/pnrStatusRoute.js');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/pnr/',pnrStatusRoute);

app.listen(port ,()=>{
    console.log(`server is running on port ${port} `);
})