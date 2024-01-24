const Joke = require('../model/jokes.model')


//todo: todos las bromas
module.exports.allJokes = async (req, res) => {
    try{
        const allJoke = await Joke.find();
        res.status(200).json(allJoke)
    }
    catch(error){
        console.error('Error al obtener todas las bromas: ', error)
        res.status(500).json({message: 'Error interno del servidor'})
    }
}

//todo: solo una broma
module.exports.oneJokes = async (req, res) => {
    const id = req.params.id;
    try{
        const oneJoke = await Joke.findById(id);
        if(!oneJoke){
            return res.status(404).json({message: "Broma no encontrada "})
        }
        res.status(200).json(oneJoke)
    }
    catch(error){
        console.error('Error al obtener una broma: ', error)
        res.status(500).json({message: 'Error interno del servidor'})
    }
}

//todo: crear bromas
module.exports.createJokes = async (req, res) => {
    const {setup, punchline} = req.body;
    try{
        const addData = new Joke({
            setup: setup,
            punchline: punchline
        })

        await addData.save()
        res.status(200).json({message: "Broma creada exitosamente"})
    }
    catch(error){
        console.error('Error al crear las bromas: ', error)
        res.status(500).json({message: 'Error interno del servidor'})
    }
}

//todo: delete bromas
module.exports.deleteJokes = async (req, res) => {
    const jokeId = req.params.id;
    try{
        const result = await Joke.deleteOne({ _id: jokeId});
        if(result.deletedCount === 0){
            return res.status(404).json({message: "No se encontraron bromas a eliminar"})
        }
        res.json({message: "Broma eliminada exitosamente"})
    }
    catch(error){
        console.error('Error al eliminar la broma: ', error)
        res.status(500).json({message: 'Error interno del servidor'})
    }
}

//todo: actualizar bromas
module.exports.updateJokes = async (req, res)=>{
    const jokeId = req.params.id;
    const sentData = req.body;
    try{
        const updateData = await Joke.findOneAndUpdate(
            {_id: jokeId},
            {$set: sentData},
            {new: true},
        )

        res.status(200).json({message: "Broma actualizada exitosamente"})
    }
    catch(error){
        console.error('Error al actualizar la broma: ', error)
        res.status(500).json({message: 'Error interno del servidor'})
    }
}       
