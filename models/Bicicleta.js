let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}
Bicicleta.allBicis = [];

Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}
let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

/**
 * @swagger
 * components:
 *   schemas:
 *     Bicicleta:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID único de la bicicleta
 *         color:
 *           type: string
 *           description: Color de la bicicleta
 *         modelo:
 *           type: string
 *           description: Modelo de la bicicleta
 *         ubicacion:
 *           type: array
 *           items:
 *             type: number
 *           description: Ubicación de la bicicleta (latitud, longitud)
 *       required:
 *         - id
 *         - color
 *         - modelo
 *         - ubicacion
 *       example:
 *         id: "123"
 *         color: "rojo"
 *         modelo: "montaña"
 *         ubicacion: [40.7128, -74.0060]
 */


module.exports = Bicicleta;