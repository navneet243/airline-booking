const UserService = require("../services/user-service")

const userService = new UserService();

const create = async (req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data: response,
            success: true,
            message: "User Created",
            err: {} 
        })
    } catch (error) {
        console.log(error)
        return res.status(501).json({
            data: {},
            success: false,
            message: "User not created",
            err: {error}
        })
    }
};

const signIn = async (req,res) => {
    try {
        const response = await userService.signin(req.body.email, req.body.password);
        return res.status(200).json({
            data: response,
            success: true,
            message: "SignIn successful",
            err: {} 
        })
    } catch (error) {
        console.log(error)
        return res.status(501).json({
            data: {},
            success: false,
            message: "SignIn unsuccessful",
            err: {error}
        })
    }
}

const isAuthenticated = async(req,res) => {
    try {
        const token = req.headers["x-access-token"];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            data: response,
            success: true,
            message: "User is authenticated and valid",
            err: {} 
        })
    } catch (error) {
        console.log(error)
        return res.status(501).json({
            data: {},
            success: false,
            message: "Authentication unsuccessful",
            err: {error}
        })
    }
}

const destroy = async (req,res) => {
    try {
        const response = await userService.delete(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "User deleted",
            err: {} 
        })
    } catch (error) {
        console.log(error)
        return res.status(501).json({
            data: {},
            success: false,
            message: "User not deleted",
            err: {error}
        })
    }
}

module.exports ={create, destroy, signIn, isAuthenticated}