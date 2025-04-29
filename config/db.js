import mongoose from "mongoose";
export let dbConnect = async () => {

  await mongoose.connect("mongodb://127.0.0.1:27017/mybackend")
    .then(() => console.log("connected"))
    .catch(() => console.log("error"));
    
};
