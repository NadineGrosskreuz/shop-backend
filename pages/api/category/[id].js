import Category from "../../../src/models/Category";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    const deleteCategory = await Category.findByIdAndDelete;
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
