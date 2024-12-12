var express = require("express");
var router = express.Router();
var ProformaInvoiceController =
  require("../controllers/ProformaInvoiceController")();

// Create Client
router.post("/", ProformaInvoiceController.create);

// List Client
router.get("/", ProformaInvoiceController.read);

// Update Client
router.patch("/:id", ProformaInvoiceController.update);

// Delete Client
router.delete("/:id", ProformaInvoiceController.destroy);

module.exports = router;
