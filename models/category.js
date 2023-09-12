const mongoose = require('mongoose')
const {Schema} = mongoose

const categorySchema = new Schema({
    name:{
        type: String,
        unique:true,
        required: true
    },
    description:{
        type: String,
        required: false,
    },
    products:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        }
    ]
})

module.exports = mongoose.model('category', categorySchema)