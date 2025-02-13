const { User_Role, Role, Permission } = require("../models");

// Middleware to check if user has permission
const checkPermission = (requiredPermission) => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id; // Assuming you're storing user ID in req.user
      const userRoles = await User_Role.findAll({ where: { userId } });
      const roleIds = userRoles.map((role) => role.roleId);

      // Find permissions associated with roles
      const permissions = await Permission.findAll({
        include: {
          model: Role,
          where: {
            id: roleIds,
          },
          through: { attributes: [] },
        },
      });

      const userPermissions = permissions.map(
        (permission) => permission.permissionName
      );
      if (userPermissions.includes(requiredPermission)) {
        next(); // Permission granted
      } else {
        res.status(403).json({ error: "Access denied" }); // Permission denied
      }
    } catch (error) {
      res.status(500).json({ error: "Error checking permissions" });
    }
  };
};

module.exports = checkPermission;
