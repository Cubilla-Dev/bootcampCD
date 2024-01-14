const express = require('express')
const app = express()
const router = require('./src/routers/api')

app.use(router)

app.listen(3000, () => console.log('Server en linea'))