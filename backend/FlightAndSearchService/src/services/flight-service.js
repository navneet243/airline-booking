const {FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(flightData) {
        try { 
            if(!compareTime(flightData.departureTime, flightData.arrivalTime)) {
                throw {error: "Departure time must be before arrival time."};
            }
            const airplane = await this.airplaneRepository.getAirplane(flightData.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...flightData,
                totalSeatsAvailable: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: createFlight", error);
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight= await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: getFlights", error);
            throw {error};
        }
    }

    async getAllFlights(data) {
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: getAllFlights", error);
            throw {error};
        }
    }

    async updateFlight(flightId, flightData) {
        try {
            const flight = await this.flightRepository.updateFlight(flightId, flightData);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: updateFlight", error);
            throw {error};
        }
    }
}

module.exports = FlightService;