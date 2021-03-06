const express = require('express')
const dotenv = require('dotenv')
const morgam = require('morgan')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const cors = require("cors");

// const errorHandler = require('./middleware/error')
// const {protectRoutes} = require('./middleware/auth')

// Load env vars
dotenv.config({path: './config/config.env'})

// Connect to DB
connectDB()

//Route file 
// const transactions = require('./routes/transactions')
const users = require('./routes/users')

const app = express()

// Body parser
app.use(express.json())

// Cookie parser
app.use(cookieParser())

app.use(cors())


// dev logging
if(process.env.NODE_ENV==='development') {
    app.use(morgam('dev'))
}

// Mount routes
// app.use('/api/v1', transactions)
app.use('/api/v1/users', users)

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//     next();
// });


// Error handling middleware
// app.use(errorHandler)

const PORT = process.env.PORT

const server = app.listen(PORT, ()=>console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))

process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error: ${err.message}`)

    server.close(()=>process.exit())
})