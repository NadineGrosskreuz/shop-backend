import Category from "../../../src/models/Category";
import Product from "../../../src/models/Product";

export default async function handler(req, res) {
  const { id } = req.query;
  console.log(id);

  if (req.method === "DELETE") {
    const deleteCategory = await Category.findByIdAndDelete(id);
    /* if (!deleteProduct) {
      const deleteCategory = await Category.findByIdAndDelete;
      res
        .status(200)
        .json({ message: "Category deleted", category: deleteCategory });
    }*/
    res
      .status(200)
      .json({ message: "Category deleted", category: deleteCategory });
  } else {
    const singleCategory = await Category.findById(id);
    res.status(200).json(singleCategory);
  }
}
