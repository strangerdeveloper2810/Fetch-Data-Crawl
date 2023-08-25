const products = require("../../data/dataProductTiki.json");

const getProductList = () => {
  if (products) {
    return products;
  } else {
    return false;
  }
};

const getProductDetail = (id) => {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    const product = products[index];
    return product;
  } else {
    return false;
  }
};

const deletedProduct = (id) => {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    const product = products[index];
    products.splice(index, 1);
    return product;
  } else {
    return false;
  }
};

module.exports = {
  getProductList,
  getProductDetail,
  deletedProduct,
};
