import { dbConnect } from "../lib/shop-backend";
import Product from "../models/Product";
import Category from "../models/Category";

export const getProducts = async () => {
  await dbConnect();
  //populate: guckt in Kategorien nach Daten und packt die in Produkte
  const products = await Product.find().populate("category");

  return products.map(({ id, description, name, category, price, tags }) => ({
    id,
    description,
    name,
    category: category.name,
    price,
    tags,
  }));
};
