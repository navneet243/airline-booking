const express = require("express");
const {PORT} = require("./config/serverConfig")
const apiRoutes = require('./routes/index')
const db = require('./models/index')

const setupAndStartServer = () => {
    const app = express()

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT,() => {
        console.log(`server listening at ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true})
        }
    })
}

setupAndStartServer();