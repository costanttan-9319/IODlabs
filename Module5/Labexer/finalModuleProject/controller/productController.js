const axios = require('axios');

const getProducts = (req, res) => {
    // Your back-end server uses axios to fetch the data
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
            // We send the response data back to your front-end
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "Back-end failed to fetch products" });
        });
};

module.exports = { getProducts };