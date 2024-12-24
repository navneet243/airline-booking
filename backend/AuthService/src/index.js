const express = require('express');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db =require('./models/index');
const {User, Role} = require('./models/index');

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
        const u1 = await User.findByPk(7);
        const r1 = await Role.findByPk(1);
        if (u1 && r1) {
            u1.addRole(r1);
            // const response = await u1.getRoles();
            // console.log(response);
        } else {
            console.log('User or Role not found');
        }

    })
}

setupAndStartServer();