const expressAsyncHandler = require("express-async-handler");
const productCollection = require("../../models/product.model");
const ApiResponse = require("../../utils/ApiResponse.utils");

const getFilteredProducts = expressAsyncHandler(async (req, res) => {
  const { category = [], brand = [], sortBy = "price-lowToHigh" } = req.query;
  let filters = {};
  if (category.length) filters.category = { $in: category.split(",") };
  if (brand.length) filters.brand = { $in: brand.split(",") };

  let sort = {};
  if (sortBy === "price-lowToHigh") sort.price = 1;
  else if (sortBy === "price-highToLow") sort.price = -1;
  else if (sortBy === "title-aToZ") sort.title = 1;
  else if (sortBy === "title-zToA") sort.title = -1;
  else sort.price = 1;

  let products = await productCollection.find(filters).sort(sort);
  new ApiResponse(true, "Products fetched successfully", products, 200).send(res);
});

const getProductDetails = expressAsyncHandler(async (req, res) => {
  const product = await productCollection.findById(req.params.id);
  if (!product) return next(new ErrorHandler("Product not found", 404));
  new ApiResponse(true, "Product fetched successfully", product, 200).send(res);
});

module.exports = { getFilteredProducts, getProductDetails };
