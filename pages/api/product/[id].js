import Product from "../../../src/models/Product";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    const deleteProduct = await Product.findByIdAndDelete;
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
