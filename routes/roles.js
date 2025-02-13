var express = require("express");
var router = express.Router();

const RoleController = require("../controllers/RoleController")();

router.post("/", RoleController.create);

// List User
router.get("/", RoleController.read);

// Update User
router.patch("/:id", RoleController.update);

// Delete User
router.delete("/:id", RoleController.destroy);

module.exports = router;
