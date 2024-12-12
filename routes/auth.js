var express = require("express");
var router = express.Router();
const db = require("../models");
const md5 = require("md5");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { phoneNumber, password } = req.body;
  try {
    const user = await db.Users.findOne({
      //it check for the person whoes name phone number is match with phoneNumber and get it .
      where: {
        phoneNumber: phoneNumber,
      },
    });

    if (!user) {
      throw new Error("please sign-up");
    }
    if (user.password !== md5(password)) {
      throw Error("wrong password");
    } else {
      const token = jwt.sign(
        {
          data: user,
        },
        "secret",

        { expiresIn: "1h" }
      );
      res.status(200).json({ token, userInfo: user });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
