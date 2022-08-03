const router = require("express").Router();
const {
  getProducts,
  getSingleProduct,
  likeProduct,
} = require("../../controllers/product-controller");

router.route("/").get(getProducts);

router.route("/:id").get(getSingleProduct).post(likeProduct);

module.exports = router;
