const express = require('express')
const app = express()
require('dotenv').config()

app.set('PORT', process.env.PORT)
app.use(express.json())

app.listen(app.get('PORT'), ()=>{
    console.log(`Server listen to port: ${app.get('PORT')}` );
})

require('./drivers/connect_db')
app.use('/product', require('./routes/product'))
app.use('/user', require('./routes/user'))
app.use('/category', require('./routes/category'))
app.use('/order', require('./routes/order'))
