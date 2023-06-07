import mongoose from "mongoose";
import { Schema } from "mongoose";

const Product= new Schema({
    Name:String,
    Price:Number
});





export default mongoose.model("Products",Product);