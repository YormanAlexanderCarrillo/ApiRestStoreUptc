const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('product', productSchema)