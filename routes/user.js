const express = require('express')
const router = express.Router()

const {obtainAllUsers,saveUser, findUserById, deleteUser, loginUser, sendMailRecoveryPass,updatePassword} = require('../controllers/controll_user')

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Operaciones relacionadas con usuarios
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: Obtener todos los usuarios
 *     description: Obtiene todos los usuarios registrados en el sistema.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 *         schema:
 *           $ref: '#/definitions/User'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.get('/', obtainAllUsers)

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - Usuarios
 *     summary: Registrar un nuevo usuario
 *     description: Registra un nuevo usuario en el sistema.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         in: body
 *         description: Datos del usuario a registrar.
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Usuario registrado exitosamente.
 *         schema:
 *           $ref: '#/definitions/User'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.post('/', saveUser)

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: Obtener un usuario por ID
 *     description: Obtiene un usuario específico por su ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del usuario a buscar.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Usuario encontrado exitosamente.
 *         schema:
 *           $ref: '#/definitions/User'
 *       404:
 *         description: Usuario no encontrado.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.get('/:id', findUserById)

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - Usuarios
 *     summary: Eliminar un usuario por ID
 *     description: Elimina un usuario específico por su ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del usuario a eliminar.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *         schema:
 *           $ref: '#/definitions/User'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.delete('/:id', deleteUser)

/**
 * @swagger
 * /users/login:
 *   post:
 *     tags:
 *       - Usuarios
 *     summary: Iniciar sesión de usuario
 *     description: Inicia sesión de usuario con correo electrónico y contraseña.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userCredentials
 *         in: body
 *         description: Credenciales de inicio de sesión (correo electrónico y contraseña).
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserLoginInput'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso.
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: boolean
 *             message:
 *               type: string
 *       401:
 *         description: Contraseña incorrecta o usuario no encontrado.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.post('/login', loginUser)

/**
 * @swagger
 * /users/updatePassword:
 *   post:
 *     tags:
 *       - Usuarios
 *     summary: Actualizar contraseña de usuario
 *     description: Actualiza la contraseña de un usuario.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: updatePasswordInfo
 *         in: body
 *         description: Información para actualizar la contraseña (correo electrónico y nueva contraseña).
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UpdatePasswordInput'
 *     responses:
 *       200:
 *         description: Contraseña actualizada exitosamente.
 *         schema:
 *           $ref: '#/definitions/User'
 *       401:
 *         description: Usuario no encontrado.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.post('/updatePassword', updatePassword) 


/**
 * @swagger
 * /users/sendEmail/{email}:
 *   post:
 *     tags:
 *       - Usuarios
 *     summary: Enviar correo de recuperación de contraseña
 *     description: Envía un correo de recuperación de contraseña al usuario.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         in: path
 *         description: Correo electrónico del usuario.
 *         required: true
 *         type: string
 *       - name: linkRecoveryPassword
 *         in: body
 *         description: Enlace para recuperación de contraseña.
 *         required: true
 *         schema:
 *           $ref: '#/definitions/LinkRecoveryInput'
 *     responses:
 *       200:
 *         description: Correo de recuperación de contraseña enviado exitosamente.
 *         schema:
 *           type: object
 *           properties:
 *             state:
 *               type: boolean
 *             message:
 *               type: string
 *       404:
 *         description: Usuario no encontrado.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.post('/sendEmail/:email', sendMailRecoveryPass)

/**
 * @swagger
 * definitions:
 *   Error:
 *     type: object
 *     properties:
 *       status:
 *         type: boolean
 *         example: false
 *       error:
 *         type: string
 *         example: Mensaje de error
 *   Role:
 *     type: string
 *     enum: ['customer', 'administrator']
 *     default: 'customer'
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: number
 *         example: 123
 *       name:
 *         type: string
 *         example: John
 *       lastname:
 *         type: string
 *         example: Doe
 *       email:
 *         type: string
 *         example: john@example.com
 *       password:
 *         type: string
 *         example: hashedPassword123 
 *       phone:
 *         type: number
 *         example: 1234567890
 *       role:
 *         $ref: '#/definitions/Role' 
 *     required:
 *       - id
 *       - name
 *       - lastname
 *       - email
 *       - password
 *       - phone
 *       - role
 *   UserLoginInput:
 *      type: object
 *      properties:
 *        email:
 *         type: string
 *         example: john@example.com
 *        password:
 *         type: string
 *         example: hashedPassword123 
 *   LinkRecoveryInput:
 *      type: object
 *      properties:
 *        linkRecoveryPassword:
 *         type: string
 *         example: linkrecoveryPassword
 *   UpdatePasswordInput:
 *      type: object
 *      properties:
 *        emailSearch:
 *         type: string
 *         example: john@example.com
 *        newPassword:
 *         type: string
 *         example: newHashedPassword123 
 * 
 */

module.exports = router