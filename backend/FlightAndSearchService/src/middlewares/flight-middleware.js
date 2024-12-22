const { ClientErrorCodes } = require("../utils/error-codes");

const validateFlight = (req,res,next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime || 
        !req.body.departureTime || 
        !req.body.price
    ){
        res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request',
            err: 'Create flight properties missing'
        });
    }
    next();
}

module.exports = {validateFlight}