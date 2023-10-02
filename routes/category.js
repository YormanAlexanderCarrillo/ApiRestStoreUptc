const express = require('express')
const router = express.Router()

const {obtainAll, createCategory, findCategoryById, addProductToCategory, deleteCategory}= require('../controllers/controll_category.js')

/**
 * @swagger
 * tags:
 *   name: Categorías
 *   description: Operaciones relacionadas con categorías
 */


/**
 * @swagger
 * /categories:
 *   get:
 *     tags:
 *       - Categorías
 *     summary: Obtener todas las categorías
 *     description: Obtiene todas las categorías disponibles.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: boolean
 *             dataCategory:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Category'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.get('/', obtainAll)

/**
 * @swagger
 * /categories:
 *   post:
 *     tags:
 *       - Categorías
 *     summary: Crear una nueva categoría
 *     description: Crea una nueva categoría en la base de datos.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: category
 *         in: body
 *         description: Datos de la categoría a crear.
 *         required: true
 *         schema:
 *           $ref: '#/definitions/CategoryInput'
 *     responses:
 *       200:
 *         description: Categoría creada exitosamente.
 *         schema:
 *           $ref: '#/definitions/Category'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.post('/', createCategory)

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     tags:
 *       - Categorías
 *     summary: Obtener una categoría por ID
 *     description: Obtiene una categoría específica por su ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la categoría a buscar.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Categoría encontrada exitosamente.
 *         schema:
 *           $ref: '#/definitions/Category'
 *       404:
 *         description: Categoría no encontrada.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.get('/:id', findCategoryById)

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     tags:
 *       - Categorías
 *     summary: Agregar un producto a una categoría
 *     description: Agrega un producto existente a una categoría existente por su ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la categoría a la que se desea agregar el producto.
 *         required: true
 *         type: string
 *       - name: productId
 *         in: body
 *         description: ID del producto a agregar a la categoría.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             idProduct:
 *               type: string
 *           example:
 *             idProduct: ProductoID
 *     responses:
 *       200:
 *         description: Producto agregado exitosamente a la categoría.
 *         schema:
 *           $ref: '#/definitions/Category'
 *       404:
 *         description: Categoría o producto no encontrados.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.put('/:id', addProductToCategory)

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     tags:
 *       - Categorías
 *     summary: Eliminar una categoría por ID
 *     description: Elimina una categoría específica por su ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la categoría a eliminar.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente.
 *         schema:
 *           $ref: '#/definitions/Category'
 *       404:
 *         description: Categoría no encontrada.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Error del servidor
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.delete('/:id', deleteCategory)

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
 *   Category:
 *     type: object
 *     properties:
 *       _id:
 *         type: string
 *         example: 12345abcde
 *       name:
 *         type: string
 *         example: Nombre de la categoría
 *       description:
 *         type: string
 *         example: Descripción de la categoría
 *       classification:
 *         type: string
 *         example: Clasificación de la categoría
 *       products:
 *         type: array
 *         items:
 *           type: string
 *           example: ProductoID
 *   CategoryInput:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         example: Nombre de la categoría
 *       description:
 *         type: string
 *         example: Descripción de la categoría
 *       classification:
 *         type: string
 *         example: Clasificación de la categoría
 */


module.exports = router