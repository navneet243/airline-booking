const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit')
const { createProxyMiddleware } = require('http-proxy-middleware');
const {PORT, FLIGHT_SERVICE, BOOKING_SERVICE} = require('./config/serverConfig')

const limiter = rateLimit({
    windowMs: 2 *60 *1000, //time
    max: 50 //request
})

const setupAndStartServer = ( )=> {
    const app = express();

    app.use(morgan('combined'))
    app.use(limiter);
    app.use('/flightsService', createProxyMiddleware({ 
        target: FLIGHT_SERVICE, 
        changeOrigin: true, 
        pathRewrite: {'^/flightsService' : '/'} 
    }));
    app.use('/bookingService', createProxyMiddleware({ 
        target: BOOKING_SERVICE, 
        changeOrigin: true, 
        pathRewrite: {'^/bookingService' : '/'}
    }));

    app.listen(PORT, () => {
        console.log(`Server listening at PORT ${PORT}`);
    })
}

setupAndStartServer();