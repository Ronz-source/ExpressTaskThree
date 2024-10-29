const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const port = 3000;

// use middleware
app.use(express.json());

// use product routes
app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})