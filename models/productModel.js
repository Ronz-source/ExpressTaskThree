// models/productModel.js
// sample

let products = [
    {
        id: 1,
        name: 'Laptop',
        category: 'Electronics',
        price: 100000,
        specs: {
            ram: 8,
            storage: 512
        }
    },
    {
        id: 2,
        name: 'Smartphone',     
        category: 'Electronics',
        price: 50000,
        specs: {
            ram: 4, 
            storage: 128
        }    
    }
];

const getAllProducts = () => {
    return products;
};


const addProduct = (product) => {
    products.push(product);
};

const findProductById = (id) => {
    return products.find((product) => product.id === id);
};

const updateProduct = (id, updatedProduct) => {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index] = updatedProduct;
    }
};

module.exports = {
    getAllProducts,
    addProduct,
    findProductById,
    updateProduct
}