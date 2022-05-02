import mongoose from "mongoose";
import Category from "./Category";

//2. Daten Produkte: Datenstruktur des Objekts in der Datenbank beschreiben; mongoose kümmert sich darum, dass der für das Model vergebene Namen in den Plural (collection) übersetzt wird

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  tags: Array,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

//Schema wie etwas angelegt werden soll; wenn es das noch nicht gibt, wird es angelegt, wenn ja, dann nicht
// wir schauen, ob es innerhalb von mongoose ein Model "Product" gibt, wenn ja, wird damit gearbeitet, wenn es nicht da ist, wird ein Model "Product" erzeugt
const Product =
  mongoose.models.Product ?? mongoose.model("Product", productSchema);

export default Product;
