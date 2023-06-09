import mongoose from "mongoose";
import { Schema } from "mongoose";

const Product= new Schema({
    Name:String,
    Price:Number,
    Colour:String,
    Brand:String,
    size:String,
    fabric:String,
    catergory:String
});





export default mongoose.model("Products",Product);