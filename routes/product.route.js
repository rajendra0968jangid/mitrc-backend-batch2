import express from "express";
import { authMiddleWare } from "../middleware/auth.js";
const productRouter = express.Router();
import {
  createproduct,
  getAllproduct,
  getproductById,
} from "../controllers/product.controller.js";
import {upload} from '../middleware/uploads.js'

productRouter.post("/create-product", upload.single("image"),authMiddleWare, createproduct);
productRouter.get("/get-product-byid/:id", getproductById);
productRouter.get("/get-all-product", getAllproduct);

export { productRouter };
