import mongoose from "mongoose";
import { Schema } from "mongoose";

const Product= new Schema({
    pname:String,
    pprice:Number
});





export default mongoose.model("Products",Product);