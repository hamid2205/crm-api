var express = require("express");
var router = express.Router();
var TermController = require("../controllers/TermController")();

// Create Client
router.post("/", TermController.create);

// List Client
router.get("/", TermController.read);

// Update Client
router.patch("/:id", TermController.update);

// Delete Client
router.delete("/:id", TermController.destroy);

module.exports = router;
