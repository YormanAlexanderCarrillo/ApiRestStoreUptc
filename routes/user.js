const express = require('express')
const router = express.Router()

const {obtainAllUsers,saveUser, findUserById, deleteUser, loginUser} = require('../controllers/controll_user')

router.get('/', obtainAllUsers)
router.post('/', saveUser)
router.get('/:id', findUserById)
router.delete('/:id', deleteUser)
router.post('/login', loginUser)

module.exports = router