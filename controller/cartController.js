const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

const cartProd = async (req, res) => {
    try {
        const { prod_id, quantity } = req.body;

        if (!prod_id) return res.status(400).json({ message: "Product ID is required" });

        const product = await Product.findById(prod_id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        let item = await Cart.findOne({ prod_id });

        if (item) {
            item.quantity += quantity || 1;
            await item.save();
            return res.status(200).json({ message: "Quantity updated", item });
        }

        item = await Cart.create({
            prod_id,
            quantity: quantity || 1
        });

        res.status(200).json({ message: "Added to cart", item });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const viewCart = async (req, res) => {
    try {
        const cartItems = await Cart
            .find()
            .populate('prod_id'); 

        res.status(200).json(cartItems);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving cart", error: err });
    }
};

const deleteCart = async (req, res) => {
    try {
        const del = await Cart.findByIdAndDelete(req.params.id);

        if (!del) return res.status(404).json({ message: "Item not found" });

        res.status(200).json({ message: "Item removed from cart" });

    } catch (err) {
        res.status(500).json({ message: "Error deleting item" });
    }
};


module.exports = {
cartProd,
viewCart,
deleteCart
}