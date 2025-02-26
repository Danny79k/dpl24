let Bicicleta = require("../../models/Bicicleta");
const express = require('express');
const app = express();

app.use(express.json());

exports.bicicleta_list = function(req, res) {
    res.status(200).json ({
        bicicletas: Bicicleta.allBicis
    });    
};

exports.bicicleta_create = async function(req, res) {
    try {
        let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
        bici.ubicacion = [req.body.latitud, req.body.longitud];
        
        await Bicicleta.add(bici); // Si es asíncrona

        res.status(201).json({ bicicleta: bici });
    } catch (error) {
        res.status(500).json({ error: "Error al crear la bicicleta", detalle: error.message });
    }
};

exports.bicicleta_remove = async function (req, res) {
    try {
        const id = req.params.id;

        const bicicletaEliminada = await Bicicleta.removeById(id); // Método ficticio, asume que lo tienes definido
        
        if (!bicicletaEliminada) {
            return res.status(404).json({ error: "Bicicleta no encontrada" });
        }

        res.status(200).json({ mensaje: "Bicicleta eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la bicicleta", detalle: error.message });
    }
};

exports.bicicleta_update = async function (req, res) {
    try {
        const id = req.params.id;
        const { color, modelo, latitud, longitud } = req.body;

        const bicicletaActualizada = await Bicicleta.findByIdAndUpdate(
            id,
            { color, modelo, ubicacion: [latitud, longitud] },
            { new: true } // Devuelve el documento actualizado
        );

        if (!bicicletaActualizada) {
            return res.status(404).json({ error: "Bicicleta no encontrada" });
        }

        res.status(200).json({ mensaje: "Bicicleta actualizada correctamente", bicicleta: bicicletaActualizada });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la bicicleta", detalle: error.message });
    }
};
