const express = require('express')
const app = express()
const PORT = 3000
const router = require('./src/routers/pirata.routes')
const config = require('./config')
const cors = require('cors')
const { swaggerDocs } = require('./condigSwagger')

//conexion a la db
require('./mongoose.config')
const corsOptions = {
    origin:  'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express .json())
app.use(router)

app.listen(config.api.port, ()=>{
    console.log(`El server esta en linea en el puerto ${PORT}`)
    swaggerDocs(app, config.api.port)
})