const fetch = require('node-fetch');

const getProducts = async (req, res) => {
    try {
        const data = await fetch(
            "https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI"
        );

        const products = await data.json();
    
        res.status(200).send(products)

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await fetch(
            `https://api.johnlewis.com/mobile-apps/api/v1/products/${id}`
        );

        const product = await data.json();

        res.status(200).send(product)
    
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {getProducts, getProduct}
