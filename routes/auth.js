const Route = require('express')
const router = Route()
const authController = require('../controller/auth/register')

router.post('/register', authController.register)


module.exports = router