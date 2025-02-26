let express = require('express');
let router = express.Router();
let BicicletaControllerAPI = require("../../controllers/api/BicicletaController");

/**
 * @swagger
 * /bicicletas:
 *   get:
 *     summary: Obtener todas las bicicletas
 *     description: Retorna una lista de todas las bicicletas registradas.
 *     responses:
 *       200:
 *         description: Lista de bicicletas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bicicleta'
 */
router.get("/", BicicletaControllerAPI.bicicleta_list);

/**
 * @swagger
 * /bicicletas/create:
 *   post:
 *     summary: Crear una bicicleta
 *     description: Agrega una nueva bicicleta al sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       201:
 *         description: Bicicleta creada exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.post("/create", BicicletaControllerAPI.bicicleta_create);

/**
 * @swagger
 * /bicicletas/update/{id}:
 *   put:
 *     summary: Actualizar una bicicleta
 *     description: Modifica los datos de una bicicleta existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la bicicleta a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: Bicicleta actualizada correctamente
 *       404:
 *         description: Bicicleta no encontrada
 */
router.put("/update/:id", BicicletaControllerAPI.bicicleta_update);

/**
 * @swagger
 * /bicicletas/delete/{id}:
 *   delete:
 *     summary: Eliminar una bicicleta
 *     description: Elimina una bicicleta del sistema.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la bicicleta a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Bicicleta eliminada correctamente
 *       404:
 *         description: Bicicleta no encontrada
 */
router.delete("/delete/:id", BicicletaControllerAPI.bicicleta_remove);

module.exports = router;
