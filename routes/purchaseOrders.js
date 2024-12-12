var express = require("express");
var router = express.Router();
var PurchaseOrderController = require("../controllers/PurchaseOrderController")();

// Create Client
router.post("/", PurchaseOrderController.create);

// List Client
router.get("/", PurchaseOrderController.read);

// Update Client
router.patch("/:id", PurchaseOrderController.update);

// Delete Client
router.delete("/:id", PurchaseOrderController.destroy);

module.exports = router;
