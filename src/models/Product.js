import mongoose from "mongoose";
import Category from "./Category";

const productSchema = new mongoose.Schema({
  name: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

//Schema wie etwas angelegt werden soll; wenn es das noch nicht gibt, wird es angelegt, wenn ja, dann nicht
const Product =
  mongoose.models.Product ?? mongoose.model("Product", productSchema);

export default Product;
