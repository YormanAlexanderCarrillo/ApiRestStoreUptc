const mongoose = require('mongoose')
const {Schema} = mongoose

const categorySchema = new Schema({
    name:{
        type: String,
        unique:true,
        required: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    description:{
        type: String,
        required: false,
    },
    classification:{
        type: String,
        required: true,
    },
    products:[
        {
            required:false,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        }
    ]
})

module.exports = mongoose.model('category', categorySchema)