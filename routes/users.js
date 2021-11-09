const express = require('express')
const { register } = require('../controllers/users') 


const router = express.Router()

// const {protectRoutes} = require('../middleware/auth')

router.post('/register', register)


module.exports = router