const {User} = require("../models/index");

class UserRepository{
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong at User Repository layer");
            throw error;
        }
    };

    async delete(userId){
        try {
            const user = await User.destroy({
                where: {
                    id: userId
                }
            });
            return user;
        } catch (error) {
            console.log("Something went wrong at User Repository layer");
            throw error;
        }
    }
}

module.exports = UserRepository