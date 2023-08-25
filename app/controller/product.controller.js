const {
  getProductList,
  getProductDetail,
  deletedProduct,
} = require("../services/product.services");

const getAllProduct = (req, res) => {
  const productList = getProductList();
  if (productList) {
    res.status(200).send(productList);
  } else {
    res.status(404).send("Not Found");
  }
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = getProductDetail(id);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const productDeleted = deletedProduct(id);
  if (productDeleted) {
    res.json({ message: "Product deleted" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

module.exports = {
  getAllProduct,
  getProductById,
  deleteProduct,
};
