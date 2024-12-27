require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 6002,
    FLIGHT_SERVICE_PATH: process.env.FLIGHT_SERVICE_PATH
}