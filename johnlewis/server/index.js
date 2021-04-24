const express = require('express')
const cors = require('cors');

const postRoutes = require('./routes/products.js');

const app = express()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());

app.use('/products', postRoutes);
               
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))