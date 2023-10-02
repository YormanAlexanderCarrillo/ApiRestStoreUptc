const express = require('express')
const router = express.Router()
const {addProductToCart,getCartProducts, deleteProductFromCart} = require('../controllers/controll_productCart')

/**
 * @swagger
 * tags:
 *   name: Productos Carrito
 *   description: Operaciones relacionadas con productos
 */

/**
 * @swagger
 * /productCart/{idUser}:
 *   get:
 *     tags:
 *       - Productos Carrito
 *     summary: Obtener productos en el carrito de un usuario
 *     description: Obtiene los productos que están en el carrito de un usuario específico.
 *     parameters:
 *       - in: path
 *         name: idUser
 *         description: ID del usuario para el cual se desea obtener el carrito.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de productos en el carrito obtenidos correctamente.
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: boolean
 *               example: true
 *             cartProducts:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/ProductCart'
 *       500:
 *         description: Error interno del servidor.
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.get('/:idUser', getCartProducts)

/**
 * @swagger
 * /productCart/{idUser}:
 *   post:
 *     tags:
 *       - Productos Carrito
 *     summary: Agregar un producto al carrito de un usuario
 *     description: Agrega un producto al carrito de un usuario especificado.
 *     parameters:
 *       - in: path
 *         name: idUser
 *         description: ID del usuario al que se desea agregar el producto al carrito.
 *         required: true
 *         schema:
 *           type: string
 *       - name: productCart
 *         in: body
 *         description: Datos del producto que se agregaran al carrito.
 *         required: true
 *         schema:
 *             $ref: '#/definitions/ProductCartInput'
 *     responses:
 *       200:
 *         description: Producto agregado al carrito exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Producto agregado al carrito
 *                 data:
 *                   $ref: '#/definitions/ProductCart'
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 */
router.post('/:idUser', addProductToCart)

/**
 * @swagger
 * /productCart/{idProduct}:
 *   delete:
 *     tags:
 *       - Productos Carrito
 *     summary: Eliminar un producto del carrito
 *     description: Elimina un producto del carrito de un usuario utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: idProduct
 *         description: ID del producto en el carrito que se desea eliminar.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto eliminado del carrito exitosamente.
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: boolean
 *               example: true
 *             productDeletedFromCart:
 *               $ref: '#/definitions/ProductCart'
 *       500:
 *         description: Error interno del servidor.
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.delete('/:idProduct', deleteProductFromCart)

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
 *   ProductCart:
 *     type: object
 *     properties:
 *       _id:
 *         type: string
 *         example: 12345abcde
 *       user:
 *         type: string
 *         example: 56789fghij
 *       products:
 *         type: string
 *         example: 78901klmno
 *       quantity:
 *         type: number
 *         example: 2
 *       unitPrice:
 *         type: number
 *         example: 25.99
 *       subTotal:
 *         type: number
 *         example: 51.98
 *   ProductCartInput:
 *     type: object
 *     properties:
 *       productId:
 *         type: string
 *         example: 12345abcde
 *       quantity:
 *         type: number
 *         example: 2
 *       unitPrice:
 *         type: number
 *         example: 25.99
 */


module.exports = router