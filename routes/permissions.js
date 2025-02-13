var express = require("express");
var router = express.Router();

const PermissionController = require("../controllers/PermissionController")();

router.post("/", PermissionController.create);

// List User
router.get("/", PermissionController.read);

// Update User
router.patch("/:id", PermissionController.update);

// Delete User
router.delete("/:id", PermissionController.destroy);

// In your routes/permissions.js or a separate route for associations:
router.post("/roles/:roleId/permissions", async (req, res) => {
  const { roleId } = req.params;
  const { permissionIds } = req.body; // Array of permission IDs

  try {
    const role = await Role.findByPk(roleId);
    if (!role) {
      return res.status(404).json({ error: "Role not found" });
    }

    const permissions = await Permission.findAll({
      where: { id: permissionIds },
    });

    await role.addPermissions(permissions); // This creates the association between the role and permissions.
    res.status(200).json({ message: "Permissions assigned to role" });
  } catch (error) {
    res.status(500).json({ error: "Error assigning permissions to role" });
  }
});

module.exports = router;
