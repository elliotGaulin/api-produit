const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    discount: {
        type: Number,
    },
    vedette: {
        type: Boolean,
    },
    category: {
        type: String,
    },
});

module.exports = mongoose.model('Product', produitSchema);
