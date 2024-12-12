var express = require("express");
const CategoryController = require("../controllers/CategoryController")();
var router = express.Router();

// Create Category
router.post("/", CategoryController.create);

// List Category
router.get("/", CategoryController.read);

// Update Category
router.patch("/:id", CategoryController.update);

// Delete Category
router.delete("/:id", CategoryController.destroy);

module.exports = router;
