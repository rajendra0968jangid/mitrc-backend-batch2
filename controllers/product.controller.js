import { productModel } from "../models/product.model.js";

import { response } from "../utils/response.js";

export let createproduct = async (req, res) => {
  //
  try {
    res.send("create product");
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
    res.send("get all product");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};
