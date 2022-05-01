import { dbConnect } from "../lib/shop-backend";
import Product from "../models/Product";

export const getProducts = async () => {
  await dbConnect();
  const products = await Product.find().populate("category");

  return products.map(({ id, name /*category*/ }) => ({
    id,
    name,
    /* category: category.name,*/
  }));
};
