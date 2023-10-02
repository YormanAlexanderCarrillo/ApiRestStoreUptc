const express = require('express')
const router = express.Router()
const {obtainAll, saveProduct, modifyProduct, deleteProduct, findProductById} = require('../controllers/controll_product')

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Operaciones relacionadas con productos
 */

/**
 * @swagger
 * /products:
 *   get:
 *     tags:
 *       - Productos
 *     summary: Obtener todos los productos
 *     description: Obtiene todos los productos disponibles.
 *     responses:
 *       200:
 *         description: Lista de productos obtenidos correctamente.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/', obtainAll)

/**
 * @swagger
 * /products:
 *   post:
 *     tags:
 *       - Productos
 *     summary: Crear una nuevo producto
 *     description: Crea un nuevo producto en la base de datos.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: product
 *         in: body
 *         description: Datos del producto a crear.
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ProductInput'
 *     responses:
 *       200:
 *         description: Producto creado exitosamente.
 *         schema:
 *           $ref: '#/definitions/Products'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.post('/', saveProduct)

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     tags:
 *       - Productos
 *     summary: Modificar un producto por su ID
 *     description: Modifica un producto existente utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del producto a modificar.
 *         required: true
 *         schema:
 *           type: string
 *       - name: product
 *         in: body
 *         description: Datos del producto a modificar.
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ProductInput'
 *     responses:
 *       200:
 *         description: Producto modificado exitosamente.
 *         schema:
 *           $ref: '#/definitions/Products'
 *       500:
 *         description: Error del servidor.
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.put('/:id', modifyProduct)

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     tags:
 *       - Productos
 *     summary: Eliminar un producto por su ID
 *     description: Elimina un producto existente utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del producto a eliminar.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente.
 *         schema:
 *           $ref: '#/definitions/Products'
 *       500:
 *         description: Error del servidor.
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.delete('/:id', deleteProduct)

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     tags:
 *       - Productos
 *     summary: Obtener un producto por su ID
 *     description: Obtiene un producto existente utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del producto a obtener.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto obtenido exitosamente.
 *         schema:
 *           $ref: '#/definitions/Products'
 *       500:
 *         description: Error del servidor.
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.get('/:id', findProductById)

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
 *   Products:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         example: 12345abcde
 *       name:
 *         type: string
 *         example: Nombre del producto
 *       description:
 *         type: string
 *         example: Descripción del producto
 *       price:
 *         type: number
 *         example: 12344
 *       image:
 *         type: string
 *         example: url imagen
 *       stock:
 *         type: number
 *         example: 123
 *       availability:
 *         type: boolean
 *         example: false
 *   ProductInput:
 *     type: object
 *     properties:
 *       id:
 *         type: String
 *         example: 123
 *       name:
 *         type: string
 *         example: Nombre del producto
 *       description:
 *         type: string
 *         example: Descripción del producto
 *       price:
 *         type: number
 *         example: 123453
 *       image:
 *         type: string
 *         example: url imagen
 *       stock:
 *         type: number
 *         example: 123
 *       availability:
 *         type: boolean
 *         example: true
 */


module.exports = router