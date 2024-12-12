var express = require("express");
var router = express.Router();

const UserController = require("../controllers/UserController")();

// Create User
// router.post("/", UserController.create);

router.post("/register", UserController.create);

// List User
router.get("/", UserController.read);

// Update User
router.patch("/:id", UserController.update);

// Delete User
router.delete("/:id", UserController.destroy);

module.exports = router;
