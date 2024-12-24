const express = require('express');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db =require('./models/index');

const setupAndStartServer = async () => {
    const app= express();

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async()=>{
        console.log(`Server listening at ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:false})
        }
    })
}

setupAndStartServer();