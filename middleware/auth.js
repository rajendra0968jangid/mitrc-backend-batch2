import jwt from "jsonwebtoken";
import { response } from "../utils/response.js";
export const authMiddleWare = async (req, res, next) => {
  try {
    const { token } = req.headers;    
    if (!token) {
      return response(res, null, "Un Authorized", false, 400);
    }
    const token_decode = jwt.verify(token, "Secret code");
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};
