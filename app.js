        const express = require('express')
        const app = express()
        const cors = require('cors')
        const { swaggerUi, specs } = require('./swagger')
        //const { auth } = require('express-oauth2-jwt-bearer');
        require('dotenv').config()

        app.set('PORT', process.env.PORT)
        app.use(express.json())
        app.use(cors())
        /*const jwtCheck = auth({
            audience: 'http//:localhost:3000',
            issuerBaseURL: 'https://dev-v888zimtujlyvur0.us.auth0.com/',
            tokenSigningAlg: 'RS256'
        });*/

        app.listen(app.get('PORT'), ()=>{
            console.log(`Server listen to port: ${app.get('PORT')}` );
        })

        //app.use(jwtCheck);

        require('./drivers/connect_db')
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
        app.use('/products', require('./routes/product'))
        app.use('/users', require('./routes/user'))
        app.use('/categories', require('./routes/category'))
        app.use('/orders', require('./routes/order'))
        app.use('/productCart', require('./routes/productCart'))
        app.use('/shoppingCart',  require('./routes/shoppingCart'))
        app.use('/payment', require('./routes/payment'))
