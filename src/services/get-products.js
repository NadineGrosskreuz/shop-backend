import { dbConnect } from "../lib/shop-backend";
import Product from "../models/Product";
import Category from "../models/Category";

//3. Daten Produkte: Funktion lädt Daten von MongoDB; mappen über Daten und sagen, welche wir brauchen

export const getProducts = async () => {
  // warten, dass Verbindung zur Datenbank aufgebaut wird
  await dbConnect();
  //populate: guckt in Kategorien nach Daten und packt die in Produkte
  //wir warten auf Daten
  //find: gib mir alle Objekte aus der Collection, die zu meinem Product-Model passen

  const products = await Product.find().populate("category");

  //wir mappen über die Daten, die wir jetzt haben, damit die Felder ausgegeben werden, die wir haben möchten
  return products.map(({ id, description, name, category, price, tags }) => ({
    id,
    description,
    name,
    category: category.name,
    price,
    tags,
  }));
};
