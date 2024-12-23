const UserRepository = require("../repository/user-repository");

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user= await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Soomething went wrong at UserService layer");
            throw error
        }
    };

    async delete(id){
        try {
            const user= await this.userRepository.delete(id);
            return user;
        } catch (error) {
            console.log("Soomething went wrong at UserService layer");
            throw error
        }
    }
}

module.exports = UserService;