const express = require("express");
const {PORT} = require("./config/serverConfig");
const db = require('./models/index')

const ApiRoutes = require("./routes/index")

const setupAndStartServer = async () => {
    const app= express();

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.use('/flightsService/api', ApiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server listening at ${PORT}`);
        // db.sequelize.sync({alter:true});
    })
}

setupAndStartServer();

