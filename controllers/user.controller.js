import { userModel } from "../models/user.model.js";

import { response } from "../utils/response.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, "Secret code", { expiresIn: "7d" });
};

export let loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await userModel.findOne({ email });
    if (!userData) {
      return response(res, null, "User doesn't exists", false, 400);
    }
    const isMatch = await bcrypt.compare(password, userData.password);

    if (!isMatch) {
      return response(res, null, "Invalid Credentials", false, 400);
    }
    let token = createToken(userData._id);
    let obj = { userData, token };
    return response(res, obj, "User login successfully");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};

export let createUser = async (req, res) => {
  //
  try {
    let { name, email, password, phone, isVerified } = req.body;
    console.log(name);
    //
    password = await bcrypt.hash(password, 10);

    const newUser = new userModel({ name, email, password, phone, isVerified });
    const userData = await newUser.save();

    return response(res, userData, "user created success");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};

export let getUserById = async (req, res) => {
  try {
    let userId = req.params.id;
    let userData = await userModel.findById(userId);
    return response(res, userData, "user data get success");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};

export let getAllUser = async (req, res) => {
  try {
    let userData = await userModel.find();
    return response(res, userData, "All user data get success");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};

export let userUpdateById = (req, res) => {
  res.send("update user by id");
};

export let userDeleteById = (req, res) => {
  res.send("user delete by id");
};
