const UserRepository = require("../repository/user-repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {JWT_KEY} = require("../config/serverConfig")

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

    async signin(email,plainPassword){
        try {
            const user= await this.userRepository.getByEmail(email);
            const passwordMatch = this.checkPassword(plainPassword,user.password);

            if(!passwordMatch) {
                console.log("Password doesn't match");
                throw {error: 'Incorrect password'};
            }

            const newJWT = this.createToken({email: user.email, id: user.id});
            return newJWT;
        } catch (error) {
            console.log("Something went wrong in SignIn process");
            throw error
        }
    }

    checkPassword(plainPassword, encryptedPassword){
        try{
            return bcrypt.compareSync(plainPassword, encryptedPassword);
        }catch(error){
            console.log("password comparision failed")
        }
    };

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn: '1d'});
            return result;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    };

    verifyToken(token){
        try {
            const result = jwt.verify(token, JWT_KEY);
            return result;
        } catch (error) {
            console.log("Something went wrong in token validation");
            throw error;
        }
    };

    async isAuthenticated(token){
        try {
            const result = this.verifyToken(token);
            if(!result) throw {error: "Invalid token"}

            const user = this.userRepository.getById(result.id);
            if(!user) throw {error: "No user exists"}
            
            return user.id;
        } catch (error) {
            console.log("Something went wrong in token validation");
            throw error;
        }
    };

    async isAdmin(userId){
        try {
            return this.userRepository.isAdmin(userId);
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }
}

module.exports = UserService;