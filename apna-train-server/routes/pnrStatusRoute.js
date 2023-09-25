const express = require('express');

const router = express.Router();

const PNR = require('../modals/pnrStatus');

router.post("/getpnrdet" , async(req , resp)=>{

    const pnrNo = req.body.pnrno;

    console.log(pnrNo);
});

module.exports = router;