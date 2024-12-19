const {Airplane} = require('../models/index');

class AirplaneRepository {
    async createAirplane(airplaneData) {
        try{
            const airplane = await Airplane.create(airplaneData);
            return airplane;
        }catch(error){
            console.log("Something went wrong in the repository layer: Service: createAirplane", error);
            throw {error};
        }
    }

    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        }catch(error){
            console.log("Something went wrong in the repository layer: Service: getAirplanes", error);
            throw {error};
        }
    }
}

module.exports = AirplaneRepository;