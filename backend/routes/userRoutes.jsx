const express = require("express");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login");
