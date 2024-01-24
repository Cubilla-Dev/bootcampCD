const express = require('express')
const app = express()
const PORT = 3000
const router = require('./src/routers/jokes.routes')
const config = require('./config')
console.log(`${config.db.host}`)
console.log(`${config.api.port}`)
//conexion a la db
require('./mongoose.config')

app.use(express .json())
app.use('/api/joke/',router)

app.listen(config.api.port, ()=>{
    console.log(`El server esta en linea en el puerto ${PORT}`)
})