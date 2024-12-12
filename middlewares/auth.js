const jwt = require("jsonwebtoken");
const db = require("../models");

module.exports = (req, res, next) => {

    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({ error: "Unauth access" });
    }

    jwt.verify(authorization.replace("Bearer ", ""), "SECRET_TOKEN", async (err, payload) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }

        const userId = payload.user;

        const user = await db.Users.findByPk(userId);

        if (!user) {
            return res.status(400).send({ error: "Invalid token" });
        }

        req.user = user;
        next();
    });
};