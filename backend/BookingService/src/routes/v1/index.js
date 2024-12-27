const express = require("express");
const { create } = require("../../controller/BookingController");

const router = express.Router();

router.post('/booking', create)

module.exports = router;