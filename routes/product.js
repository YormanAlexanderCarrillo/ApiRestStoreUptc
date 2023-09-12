const express = require('express')
const router = express.Router()
const {obtainAll, saveProduct, modifyProduct, deleteProduct, findProductById} = require('../controllers/controll_product')
router.get('/', obtainAll)
router.post('/', saveProduct)
router.put('/:id', modifyProduct)
router.delete('/:id', deleteProduct)
router.get('/:id', findProductById)

module.exports = router