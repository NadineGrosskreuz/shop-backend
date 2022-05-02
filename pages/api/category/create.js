import { dbConnect } from "../../../src/lib/shop-backend";
import Category from "../../../src/models/Category";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const data = JSON.parse(request.body);
    await dbConnect();

    /* let user = await User.findOne({ name: data.name });

   
    if (!user) {
      user = await User.create({ name: data.name });
    }*/

    const newCategory = await Category.create({
      name: data.name,
      description: data.description,
      /*user: user.id,*/
    });

    response.status(200).json({
      message: "category created",
      category: newCategory,
    });
  } else {
    response.status(400).json({ error: "wrong method" });
  }
}
