const express = require('express')
const app = express()
require('dotenv').config()

app.set('PORT', process.env.PORT)
app.use(express.json())

app.listen(app.get('PORT'), ()=>{
    console.log(`Server listen to port: ${app.get('PORT')}` );
})

require('./drivers/connect_db')
app.use('/products', require('./routes/product'))
app.use('/users', require('./routes/user'))
app.use('/categories', require('./routes/category'))
app.use('/orders', require('./routes/order'))
app.use('/productCart', require('./routes/productCart'))
