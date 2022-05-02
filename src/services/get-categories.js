//import data from "./categories.json";
import { dbConnect } from "../lib/shop-backend";
import Category from "../models/Category";

//3. Daten Kategorien: Model importieren, über Liste mappen und neues Array erstellen; wir mappen, weil wir nur Felder zurück geben wollen, die wir haben möchten

export const getCategories = async () => {
  await dbConnect();
  const categories = await Category.find();

  return categories.map(({ id, name, description }) => ({
    id,
    name,
    description,
  }));
};
