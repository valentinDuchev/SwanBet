// server.js

// Import Express
const express = require('express');

const userController = require('./router/userRouter')
const matchController = require('./router/matchRouter')

const databaseConfig = require('./config/database');

start()

async function start() {
    const app = express();
    const PORT = 3030;
    await databaseConfig(app)

    // Define a route for the root URL
    app.get('/', (req, res) => {
        res.send('Hello, world!');
    });

    // app.get('/api/users/register', (req, res) => {
    //     res.json({message: 'Success 2!'})
    // })

    const cors = require("cors");
    const corsOptions = {
        origin: '*',
        credentials: true,            //access-control-allow-credentials:true
        optionSuccessStatus: 200,
    }
    
    app.use(cors(corsOptions))
    app.use((req, res, next) => {
        next()
    })
    app.use(express.json())
    app.use('/api', userController)
    app.use('/api', matchController)


    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });

}

