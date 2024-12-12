var express = require("express");
const SubCategoryController = require("../controllers/SubCategoryController")();
var router = express.Router();

// Create Category
router.post("/", SubCategoryController.create);

// List Category
router.get("/", SubCategoryController.read);

// Update Category
router.patch("/:id", SubCategoryController.update);

// Delete Category
router.delete("/:id", SubCategoryController.destroy);

module.exports = router;
