var express = require("express");
var router = express.Router();
var ClientController = require("../controllers/ClientController")();

// Create Client
router.post("/", ClientController.create);

// List Client
router.get("/", ClientController.read);

// Update Client
router.patch("/:id", ClientController.update);

// Delete Client
router.delete("/:id", ClientController.destroy);

module.exports = router;
