const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const app = express()

//const authRoutes = require('./routes/auth.routes')

// configura puerto y base de datos
app.set('port', process.env.PORT || 3000)
mongoose.connect(process.env.DB_STRING)
.then(db => console.log('Connected to Mongo'))
.catch(err => console.log(err))

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({
    extended: false
}))

//rutas
//app.use('/auth', authRoutes)

// inicia el servidor
app.listen(app.get('port'), ()=>{
    console.log('Server Running')
})
