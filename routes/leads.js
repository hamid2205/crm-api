var express = require("express");
var router = express.Router();
var LeadController = require("../controllers/LeadController")();

// Create Client
router.post("/", LeadController.create);

// List Client
router.get("/", LeadController.read);

// Update Client
router.patch("/:id", LeadController.update);

// Delete Client
router.delete("/:id", LeadController.destroy);

module.exports = router;
