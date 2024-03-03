const mongoose = require('mongoose');

const DB_NAME = "Autores";

mongoose.set('strictQuery', false); //importante
mongoose.connect(`mongodb://127.0.0.1/${DB_NAME}`, {
    //aca se coloca las url de las bases de datos y credenciales
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log("CONNECTED TO DB"))
.catch(err => console.log("ERROR WITH DB:" + err)); 

