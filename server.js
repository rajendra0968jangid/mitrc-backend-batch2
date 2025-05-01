import express from "express";
const app = express();
import { dbConnect } from "./config/db.js";
import "dotenv/config";
const port = process.env.PORT || 3000;
import { userRouter } from "./routes/user.route.js";

import bodyParser from "body-parser";
import { productRouter } from "./routes/product.route.js";
const jsonParser = bodyParser.json();
app.use(jsonParser);

dbConnect();

app.use("/user", userRouter);
app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
