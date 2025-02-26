let express = require('express');
let router = express.Router();
let BicicletaControllerAPI = require("../../controllers/api/BicicletaController");

router.get("/", BicicletaControllerAPI.bicicleta_list);
router.post("/create", BicicletaControllerAPI.bicicleta_create)
router.delete("/delete/:id", BicicletaControllerAPI.bicicleta_remove);
router.put("/update/:id", BicicletaControllerAPI.bicicleta_update);

module.exports = router;