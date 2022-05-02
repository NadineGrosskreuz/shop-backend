import Product from "../../../src/models/Product";
import Category from "../../../src/models/Category";

export default async function handler(req, res) {
  const { id } = req.query;
  console.log(id);

  if (req.method === "DELETE") {
    const deleteProduct = await Product.findByIdAndDelete(id);
    /* if (!deleteProduct) {
      const deleteCategory = await Category.findByIdAndDelete;
      res
        .status(200)
        .json({ message: "Category deleted", category: deleteCategory });
    }*/
    res
      .status(200)
      .json({ message: "Product deleted", product: deleteProduct });
  } else {
    const singleProduct = await Product.findById(id);
    res.status(200).json(singleProduct);
  }
}
