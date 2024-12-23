const express = require("express");
const { create, destroy } = require("../../controllers/userController");

const router = express.Router();

router.post('/signup', create);
router.delete('/user/:id', destroy);

module.exports =router;