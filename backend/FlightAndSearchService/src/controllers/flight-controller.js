const FlightService = require('../services/flight-service');
const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
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
        return res.status(200).json({
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
        return res.status(200).json({
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
        return res.status(200).json({
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