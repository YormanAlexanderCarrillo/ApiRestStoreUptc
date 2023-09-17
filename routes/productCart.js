const express = require('express')
const router = express.Router()
const {addProductToCart,getCartProducts, deleteProductFromCart} = require('../controllers/controll_productCart')

router.get('/:id', getCartProducts)
router.post('/:id', addProductToCart)
router.delete('/:id', deleteProductFromCart)

module.exports = router