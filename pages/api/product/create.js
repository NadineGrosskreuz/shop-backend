import { dbConnect } from "../../../src/lib/shop-backend";
import Product from "../../../src/models/Product";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const data = JSON.parse(request.body);
    await dbConnect();

    /* let user = await User.findOne({ name: data.name });

   
    if (!user) {
      user = await User.create({ name: data.name });
    }*/

    const newProduct = await Product.create({
      content: data.content,
      /*user: user.id,*/
    });

    response.status(200).json({
      message: "product created",
      product: newProduct,
    });
  } else {
    response.status(400).json({ error: "wrong method" });
  }
}
