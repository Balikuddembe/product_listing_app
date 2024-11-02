const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("Error while getting products.Try again later.");
  }
};

const addProduct = async (req, res) => {
  try {
    const body = req.body;
    console.log("body", body);
    const product = await Product.create(body);
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send("Error while adding product.Try again later.");
  }
};

const updateProduct = async (req, res) => {
  try {
    const foundProduct = await Product.findOne({
      where: { id: req.params.id },
    });
    if (!foundProduct) {
      return res.status(404).send("No matching Product found.");
    }

    const { name, price, image, rating } = req.body;
    if (name) {
      foundProduct.name = name;
    }
    if (price) {
      foundProduct.price = price;
    }
    if (image) {
      foundProduct.image = image;
    }
    if (rating) {
      foundProduct.rating = rating;
    }

    const savedProduct = await foundProduct.save();
    res.status(200).send(savedProduct);
  } catch (error) {
    res.status(500).send("Error while updating product.Try again later.");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const foundProduct = await Product.findOne({
      where: { id: req.params.id },
    });
    if (!foundProduct) {
      return res.status(404).send("No matching product found.");
    }
    await foundProduct.destroy();
    res.status(200).send("Product deleted successfully.");
  } catch (error) {
    res.status(500).send("Error while deleting  a product.Try again later.");
  }
};

module.exports = { getAllProducts, addProduct, updateProduct, deleteProduct };
