const sequelize = require("../config/db/dbConnection");
const Product = require("../models/Products");

module.exports = {
  async getProducts(req, res) {
    const products = await Product.findAll();
    res.json(products);
  },

  async getSingleProduct({ params }, res) {
    const product = await Product.findOne({ where: { id: params.id } });

    if (!product) {
      res.status(404).json({ message: "No product found with that id." });
      return;
    }

    res.json(product);
  },

  async likeProduct({ params }, res) {
    const product = await Product.update(
      { likes: sequelize.literal("likes + 1") },
      { where: { id: params.id } }
    );

    if (!product) {
      res.status(404).json({ message: "No product found with that id." });
      return;
    }

    const updatedProduct = await Product.findOne({
      where: { id: params.id },
    });

    res.json(updatedProduct);
  },
};
