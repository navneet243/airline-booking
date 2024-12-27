require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 8001,
    FLIGHT_SERVICE: process.env.FLIGHT_SERVICE,
    BOOKING_SERVICE: process.env.BOOKING_SERVICE
}