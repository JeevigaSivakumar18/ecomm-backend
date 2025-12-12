const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require("cors");
const connection = require('./config/db'); // your db.js

dotenv.config();
connection();

app.use(express.json()); // parse JSON
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Routes
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/cart', cartRoutes);
app.use('/product', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
