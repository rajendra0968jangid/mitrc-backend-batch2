import mongoose from "mongoose";
export let dbConnect = async () => {

  await mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("connected"))
    .catch(() => console.log("error"));
    
};
