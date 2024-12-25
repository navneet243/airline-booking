const express = require("express");
const { create } = require("../../controller/BookingController");

const router = express.Router();

router.use('/booking', create)

module.exports = router;