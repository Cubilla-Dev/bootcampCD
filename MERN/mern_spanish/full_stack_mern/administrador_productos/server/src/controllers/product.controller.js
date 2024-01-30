const product = require('../model/product.model')


//todo: todos las bromas
module.exports.allProduct = async (req, res) => {
    try{
        const allproduct = await product.find();
        res.status(200).json(allproduct)
    }
    catch(error){
        console.error('Error al obtener todas las bromas: ', error)
        res.status(500).json({message: 'Error interno del servidor'})
    }
}

//todo: solo una broma
module.exports.oneProduct = async (req, res) => {
    const id = req.params.id;
    try{
        const oneproduct = await product.findById(id);
        if(!oneproduct){
            return res.status(404).json({message: "Broma no encontrada "})
        }
        res.status(200).json(oneproduct)
    }
    catch(error){
        console.error('Error al obtener una broma: ', error)
        res.status(500).json({message: 'Error interno del servidor'})
    }
}

//todo: Se agrega nuevos productos
module.exports.createProduct = async (req, res) => {
    const {name, description, price} = req.body;
    try{
        const addData = new product({
            name: name,
            description: description,
            price: price,
        })

        await addData.save()
        res.status(200).json({message: "Nuevo producto agregado exitosamente"})
    }
    catch(error){
        console.error('Error al crear el producto: ', error)
        res.status(500).json({message: 'Error interno del servidor'})
    }
}

//todo: delete bromas
module.exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try{
        const result = await product.deleteOne({ _id: productId});
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
module.exports.updateProduct = async (req, res)=>{
    const productId = req.params.id;
    const sentData = req.body;
    try{
        const updateData = await product.findOneAndUpdate(
            {_id: productId},
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
