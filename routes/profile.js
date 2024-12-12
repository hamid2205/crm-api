var express = require("express");
const ProfileController = require("../controllers/ProfileController")();
var router = express.Router();

// Create Category
router.post("/", ProfileController.create);

// List Category
router.get("/", ProfileController.read);

// Update Category
router.patch("/:id", ProfileController.update);

// Delete Category
router.delete("/:id", ProfileController.destroy);

module.exports = router;
