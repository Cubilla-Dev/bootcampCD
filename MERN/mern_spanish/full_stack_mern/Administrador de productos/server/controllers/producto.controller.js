const Producto = require("../models/producto.model");

module.exports.findAllProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.findProducto = async (req, res) => {
    try {
        const producto = await Producto.findOne({ _id: req.params.id });
        if (producto) {
            res.json(producto);
        } else {
            res.status(500).json({ error: "Producto not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.createProducto = async (req, res) => {
    try {
        const newProducto = await Producto.create(req.body);
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.updateProducto = async (req, res) => {
    try {
        const updateProducto = await Producto.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(201).json(updateProducto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.deletedProducto = async (req, res) => {
    try {
        const deletedProducto = await Producto.deleteOne({ _id: req.params.id });
        res.status(201).json(deletedProducto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
