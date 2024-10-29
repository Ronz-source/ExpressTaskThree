// controllers/productController.js

// import product model 
const Product = require('../models/productModel');

// get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// get product by id
const getProductById = (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = Product.findProductById(productId);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
};

// add new product using sincronous
const addProduct = (req, res) => {
    const { id, name, category, price, specs } = req.body;

    if(!id || !name || !category || !price || !specs) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const existingProduct = Product.findProductById(id);
    if(existingProduct) {
        return res.status(400).json({ message: 'Product already exists' });
    }

    const product = {id, name, category, price, specs};
    Product.addProduct(product);
    res.status(201).json({ message: 'Product added successfully' });
}

// update product 
const updateProduct = (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const { name, category, price, specs } = req.body;

    const existingProduct = Product.findProductById(productId);
    if (!existingProduct) {
        return res.status(404).json({ error: 'Product not found.' });
    }

    const updatedProduct = Product.updateProduct(productId, {id: productId, name, category, price, specs });
    res.json({ message: 'Product updated successfully', product: updatedProduct });
};


module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct
}