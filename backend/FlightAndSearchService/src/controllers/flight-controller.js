const FlightService = require('../services/flight-service');
const { SuccessCodes } = require('../utils/error-codes');
const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate
        };
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: "successfully created a flight",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            data: {},
            success: false,
            message: "not able to create a flight",
            err: error.message || "Internal Server Error"
        });
    }
};

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: "successfully fetched a flight",
            err: {}
        })
    } catch (error) {
        res.status(501).json({
            data: {},
            success: false,
            message: "not able to fetch a flight",
            err: error.message || "Internal Server Error"
        });
    }
};

const getAll = async (req, res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(SuccessCodes.OK).json({
            data: flights,
            success: true,
            message: "successfully fetched all flights",
            err: {}
        })
    } catch (error) {
        res.status(501).json({
            data: {},
            success: false,
            message: "not able to fetch all flights",
            err: error.message || "Internal Server Error"
        });
    }
};

const update = async (req, res) => {
    try {
        const flight = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: "successfully updated a flight",
            err: {}
        })
    } catch (error) {
        res.status(501).json({
            data: {},
            success: false,
            message: "not able to update a flight",
            err: error.message || "Internal Server Error"
        });
    }
};

module.exports = {
    create,
    get,
    getAll,
    update
};