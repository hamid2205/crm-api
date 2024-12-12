var express = require("express");
var router = express.Router();
var CategoryItemController = require("../controllers/CategoryItemController")();

// Create Client
router.post("/", CategoryItemController.create);

// List Client
router.get("/", CategoryItemController.read);

// Update Client
router.patch("/:id", CategoryItemController.update);

// Delete Client
router.delete("/:id", CategoryItemController.destroy);

module.exports = router;
