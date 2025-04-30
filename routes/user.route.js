import express from "express";
import {
  createUser,
  getUserById,
  getAllUser,
  userUpdateById,
  userDeleteById,
} from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.post("/create-user", createUser);
userRouter.get("/get-user-byid/:id", getUserById);
userRouter.get("/get-all-user", getAllUser);
userRouter.put("/user-update-by/:id", userUpdateById);
userRouter.delete("/user-delete-by/:id", userDeleteById);

export { userRouter };
