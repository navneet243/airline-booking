const express= require('express');
const { create, destroy, get, update, getAll } = require('../../controllers/city-contoller');

const router = express.Router();

router.post('/city', create)
router.delete('/city/:id', destroy);
router.get('/city/:id', get);
router.patch('/city/:id', update);
router.get('/cities', getAll);

module.exports = router;