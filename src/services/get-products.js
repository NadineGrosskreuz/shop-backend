import { dbConnect } from "../lib/shop-backend";
import Product from "../models/Product";
import Category from "../models/Category";

export const getProducts = async () => {
  await dbConnect();
  const products = await Product.find().populate("category");
  console.log(products);

  return products.map(({ id, description, name, category, price, tags }) => ({
    id,
    description,
    name,
    category: category.name,
    price,
    tags,
  }));
};
