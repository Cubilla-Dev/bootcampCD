require('dotenv').config()

module.exports = {
    api: {
        port: process.env.PORT
    },
    db: {
        host: process.env.HOST 
    }
}