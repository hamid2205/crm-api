var express = require("express");
var router = express.Router();
var VendorController = require("../controllers/VendorController")();

// Create Vendor
router.post("/", VendorController.create);

// List Vendor
router.get("/", VendorController.read);

// Update Vendor
router.patch("/:id", VendorController.update);

// Delete Vendor
router.delete("/:id", VendorController.destroy);

module.exports = router;
