import { getProducts } from "../../src/services/get-products";

export default async function handler(req, res) {
  const products = await getProducts();
  console.log(products);

  res.status(200).json(products);
}
