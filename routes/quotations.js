var express = require("express");
var router = express.Router();
var QuotationController = require("../controllers/QuotationController")();

// Create Client
router.post("/", QuotationController.create);

// List Client
router.get("/", QuotationController.read);

// Update Client
router.patch("/:id", QuotationController.update);

// Delete Client
router.delete("/:id", QuotationController.destroy);

module.exports = router;
