const express = require("express");
const { create, destroy, signIn, isAuthenticated, isAdmin } = require("../../controllers/userController");
const { AuthRequestValidators } = require("../../middlewares/index");

const router = express.Router();

router.post('/signup', create);
router.post('/signin', AuthRequestValidators.validateUserAuth, signIn)
router.get('/isAuth', isAuthenticated);
router.get('/isAdmin', AuthRequestValidators.validateIsAdminRequest, isAdmin);
router.delete('/user/:id', destroy);

module.exports =router; 