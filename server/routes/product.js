const express = require("express");
const { getAllProducts, addProduct, updateProduct,deleteProduct } = require("../controllers/product");
const Router = express.Router();

Router.get("/", getAllProducts);
Router.post("/", addProduct);
Router.patch("/:id", updateProduct);
Router.delete("/:id", deleteProduct);

module.exports = Router;
