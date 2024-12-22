const AirportService = require('../services/airport-service');
const { SuccessCodes } = require('../utils/error-codes');
const airportService = new AirportService();

const create = async (req,res) => {
    try{
        const airport = await airportService.create(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: airport,
            success: true,
            message: "successfully created a airport",
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(501).json({
            data:{},
            success: false,
            message: "not able to create a airport",
            err: error
        })
    }
};

const destroy = async (req,res) => {
    try {
        const response = await airportService.delete(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: "successufully deleted the airport",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            data:{},
            success: false,
            message: "not able to delete airport",
            err: error
        })
    }
}  

module.exports = {create, destroy}