const express = require('express')
const router = express.Router()

const {obtainAll}= require('../controllers/controll_category.js')

router.get('/', obtainAll)


module.exports = router