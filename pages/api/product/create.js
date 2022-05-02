import { dbConnect } from "../../../src/lib/shop-backend";
import Product from "../../../src/models/Product";

export default async function handler(request, response) {
  //mit POST werden die Daten abgeschickt
  if (request.method === "POST") {
    //übergebene Daten werden entgegen genommen
    const data = JSON.parse(request.body);
    //API-Server spricht mit der MongoDB
    await dbConnect();

    /* let user = await User.findOne({ name: data.name }); 
    if (!user) {
      user = await User.create({ name: data.name });
    }*/

    //mit create werden die Daten in die Datenbank eingelesen
    const newProduct = await Product.create({
      name: data.name,
      description: data.description,
      tags: data.tags,
      price: data.price,
      category: data.category,
    });

    response.status(200).json({
      message: "product created",
      product: newProduct,
    });
  } else {
    response.status(400).json({ error: "wrong method" });
  }
}
