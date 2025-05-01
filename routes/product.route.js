import express from "express";
import { authMiddleWare } from "../middleware/auth.js";
const productRouter = express.Router();
import {
  createproduct,
  getAllproduct,
  getproductById,
} from "../controllers/product.controller.js";

productRouter.post("/create-product", authMiddleWare, createproduct);
productRouter.get("/get-product-byid/:id", getproductById);
productRouter.get("/get-all-product", getAllproduct);

export { productRouter };
