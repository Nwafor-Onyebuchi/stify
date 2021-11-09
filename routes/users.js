const express = require('express')
const { register, getApi } = require('../controllers/users') 


const router = express.Router()

// const {protectRoutes} = require('../middleware/auth')

router.post('/register', register)
router.get('/', getApi)


module.exports = router