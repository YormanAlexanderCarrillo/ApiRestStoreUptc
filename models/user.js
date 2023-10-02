const mongoose = require('mongoose')
const {Schema}= mongoose

const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: ['customer', 'administrator'],
        default: 'customer',
    }

})

module.exports= mongoose.model('user', userSchema)