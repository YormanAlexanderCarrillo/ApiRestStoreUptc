const express = require('express')
const router = express.Router()

const {obtainAll, createCategory, findCategoryById, addProductToCategory, deleteCategory}= require('../controllers/controll_category.js')

router.get('/', obtainAll)
router.post('/', createCategory)
router.get('/:id', findCategoryById)
router.put('/:id', addProductToCategory)
router.delete('/:id', deleteCategory)


module.exports = router