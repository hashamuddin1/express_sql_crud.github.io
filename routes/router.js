const express = require("express");
const router = new express.Router();
const { allproduct } = require("../controllers/product_controller")

//view all products
router.get("/", allproduct)

module.exports = router;