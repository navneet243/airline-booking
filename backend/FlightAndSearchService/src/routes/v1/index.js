const express= require('express');
const { create, destroy, get, update, getAll } = require('../../controllers/city-contoller');
const { create: createFlight, get: getFlight, getAll: getAllFlights, update: updateFlight } = require('../../controllers/flight-controller');

const router = express.Router();

//cities
router.post('/city', create)
router.delete('/city/:id', destroy);
router.get('/city/:id', get);
router.patch('/city/:id', update);
router.get('/cities', getAll);

//flights
router.post('/flights', createFlight);
router.get('/flights/:id', getFlight);
router.get('/flights', getAllFlights);
router.patch('/flights/:id', updateFlight);

module.exports = router;