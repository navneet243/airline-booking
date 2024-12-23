const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 5000,
    SALT: bcrypt.genSaltSync(9) || 10,
    JWT_KEY: process.env.JWT_KEY || "AUTH"
}