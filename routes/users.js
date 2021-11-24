const express = require('express')
const { register, getApi, checkEmail } = require('../controllers/users') 


const router = express.Router()

// const {protectRoutes} = require('../middleware/auth')

router.post('/register', register)
router.post('/validate-email', checkEmail)
router.get('/', getApi)


module.exports = router