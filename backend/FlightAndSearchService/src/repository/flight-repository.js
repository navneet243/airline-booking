const { Op } = require('sequelize');
const {Flights} = require('../models/index');

class FlightRepository {
    #createFilter(data={}) {
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        let priceFilter = [];
        if(data.minPrice) {
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice) {
            priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }
        Object.assign(filter, {[Op.and]: priceFilter});
        console.log(filter);
        return filter;
    }

    async createFlight(flightData) {
        try{
            const flight = await Flights.create(flightData);
            return flight;
        }catch(error){
            console.log("Something went wrong in the repository layer: Service: createFlight", error);
            throw {error};
        }
    }

    async getFlight(flightId) {
       try{
            const flight = await Flights.findByPk(flightId);
            return flight;
        }catch(error){   
            console.log("Something went wrong in the repository layer: Service: getFlight", error);
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try{
            const filterObject = this.#createFilter(filter);
            const flights = await Flights.findAll({
                where: filterObject
            });
            return flights;
        }catch(error){
            console.log("Something went wrong in the repository layer: Service: getAllFlights", error);
            throw {error};
        }
    }

    async updateFlight(flightId, flightData) {
        try{
            const flight = await Flights.update(flightData, {
                where: {
                    id: flightId
                }
            });
            return flight;
        }catch(error){
            console.log("Something went wrong in the repository layer: Service: updateFlight", error);
            throw {error};
        }
    }
}

module.exports = FlightRepository;
