const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    ref_id: { type: Number, default: Date.now },
    prod_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductDB', required: true },
    quantity: { type: Number, required: true, default: 1 }
});

module.exports = mongoose.model("CartDB", cartSchema);
