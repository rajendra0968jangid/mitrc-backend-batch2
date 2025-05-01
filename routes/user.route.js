import express from "express";
import {
  createUser,
  getUserById,
  getAllUser,
  userUpdateById,
  userDeleteById,
  loginUser
} from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.post("/login-user",loginUser);
userRouter.post("/create-user", createUser);
userRouter.get("/get-user-byid/:id", getUserById);
userRouter.get("/get-all-user", getAllUser);
userRouter.put("/user-update-by/:id", userUpdateById);
userRouter.delete("/user-delete-by/:id", userDeleteById);

export { userRouter };
