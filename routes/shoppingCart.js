const express = require('express')
const router = express.Router()
const {createShoppingCart, addProductCartToShoppingCart, getShoppingCart}= require('../controllers/controll_shoppingCart')

/**
 * @swagger
 * tags:
 *   name: Carrito de Compras
 *   description: Operaciones relacionadas con el carrito de compras de manera general
 */


/**
 * @swagger
 * /shoppingCart/{userId}:
 *   post:
 *     tags:
 *       - Carrito de Compras
 *     summary: Crear un carrito de compras
 *     description: Crea un carrito de compras para un usuario específico.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         in: path
 *         description: ID del usuario para el que se creará el carrito de compras.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Carrito de compras creado exitosamente.
 *         schema:
 *           $ref: '#/definitions/ShoppingCart'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.post('/:userId', createShoppingCart)

/**
 * @swagger
 * /shoppingCart:
 *   post:
 *     tags:
 *       - Carrito de Compras
 *     summary: Agregar un producto al carrito de compras
 *     description: Agrega un producto al carrito de compras de un usuario.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         in: body
 *         description: ID del usuario.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             userId:
 *               type: string
 *             productsCartId:
 *               type: string
 *           example:
 *             userId: UsuarioID
 *             productsCartId: ProductoCarritoID
 *     responses:
 *       200:
 *         description: Producto agregado al carrito de compras exitosamente.
 *         schema:
 *           $ref: '#/definitions/ShoppingCart'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.post('/', addProductCartToShoppingCart ) 

/**
 * @swagger
 * /shoppingCart/{userId}:
 *   get:
 *     tags:
 *       - Carrito de Compras
 *     summary: Obtener el carrito de compras de un usuario
 *     description: Obtiene el carrito de compras de un usuario por su ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         in: path
 *         description: ID del usuario para el que se desea obtener el carrito de compras.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Carrito de compras encontrado exitosamente.
 *         schema:
 *           $ref: '#/definitions/ShoppingCart'
 *       404:
 *         description: Carrito de compras no encontrado.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.get('/:userId', getShoppingCart)


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
 *   ShoppingCart:
 *     type: object
 *     properties:
 *       user:
 *         type: string
 *         description: ID del usuario al que pertenece el carrito de compras.
 *       productsCart:
 *         type: array
 *         items:
 *           $ref: '#/definitions/ProductCart'
 *       total:
 *         type: number
 *     required:
 *       - user
 *       - productsCart
 *       - total
 *   ProductCart:
 *     type: object
 *     properties:
 *       
 *  
 */


module.exports = router