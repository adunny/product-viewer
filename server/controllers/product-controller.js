const Product = require("../models/Products");

module.exports = {
  async getProducts(req, res) {
    const products = await Product.findAll();
    res.json(products);
  },

  async getSingleProduct(req, res) {
    const product = await Product.findOne({ where: { id: req.params.id } });

    if (!product) {
      res.status(404).json({ message: "No product found with that id." });
      return;
    }

    res.json(product);
  },
};
