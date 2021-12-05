const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const { check } = require('express-validator')

router.get('/profile', authController.profile)

router.post('/register',[
    check('name', 'Nombre no válido, mínimo 2 caracteres, máximo 50 caracteres').isLength({min: 2, max: 50}),
    check('role', 'Rol no válido'),
    check('email', 'Email no válido').isEmail(),
    check('password', 'Contraseña debil').isStrongPassword()
],
authController.register
)

router.post('/login', authController.login)

module.exports = router
