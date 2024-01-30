const pirata = require('../model/pirata.model')


//todo: todos los piratas
module.exports.allPirata = async (req, res) => {
    try{
        const allpirata = await pirata.find();
        res.status(200).json(allpirata)
    }
    catch(error){
        console.error('Error al obtener todas los piratas: ', error)
        res.status(500).json({message: 'Error interno del servidor'})
    }
}

//todo: solo un pirata
module.exports.onePirata = async (req, res) => {
    const id = req.params.id;
    try{
        const onepirata = await pirata.findById(id);
        if(!onepirata){
            return res.status(404).json({message: "Broma no encontrada "})
        }
        res.status(200).json(onepirata)
    }
    catch(error){
        console.error('Error al obtener una broma: ', error)
        res.status(500).json({message: 'Error interno del servidor'})
    }
}

//todo: Se agrega nuevos piratas
module.exports.createPirata = async (req, res) => {
    const {pirateName, imageUrl, treasureChests, pirateCatch, crewPosition, accessories} = req.body;
    try{
        const addData = new pirata({
            pirateName: pirateName,
            imageUrl: imageUrl,
            treasureChests: treasureChests,
            pirateCatch: pirateCatch,
            crewPosition: crewPosition,
            accessories: accessories
        })

        await addData.save()
        res.status(200).json({message: "Nuevo pirata agregado exitosamente"})
    }
    catch(error){
        console.error('Error al crear el pirata:', error);

        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            res.status(400).json({ errors: validationErrors });
        } else {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
}

//todo: delete piratas
module.exports.deletePirata = async (req, res) => {
    const pirataId = req.params.id;
    console.log(pirataId)
    try{
        const result = await pirata.deleteOne({ _id: pirataId});
        if(result.deletedCount === 0){
            return res.status(404).json({message: "No se encontro el pirata a eliminar"})
        }
        res.json({message: "Pirata eliminado exitosamente"})
    }
    catch(error){
        console.error('Error al eliminar al pirata: ', error)
        res.status(500).json({message: 'Error interno del servidor'})
    }
}

