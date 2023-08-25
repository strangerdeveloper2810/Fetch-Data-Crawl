const express = require("express");
const productRouter = express.Router();
const {
  getAllProduct,
  getProductById,
  deleteProduct,
} = require("../controller/product.controller");
productRouter.get("/api/gellAllProduct", getAllProduct);

productRouter.get("/api/getProductDetail/:id", getProductById);

productRouter.delete("/api/deleteProduct/:id", deleteProduct);

module.exports = productRouter;
