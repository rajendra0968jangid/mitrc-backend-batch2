import { productModel } from "../models/product.model.js";

import { response } from "../utils/response.js";

export let createproduct = async (req, res) => {
  //
  try {
    const { price, title, description } = req.body;
    const newProduct = new productModel({
      title,
      description,
      price,
      image: req.file.filename,
      author: req.body.userId,
    });
    const productData = await newProduct.save();
    return response(res, productData, "Product created success");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};

export let getproductById = async (req, res) => {
  try {
    res.send("get product by id");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};

export let getAllproduct = async (req, res) => {
  try {
    const allProducts = await productModel.find();
    return response(res, allProducts, "All products data");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};
