const router = require("express").Router();
const {
  getProducts,
  getSingleProduct,
} = require("../../controllers/product-controller");

router.route("/").get(getProducts);

router.route("/:id").get(getSingleProduct);

module.exports = router;
