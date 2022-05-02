import { getCategories } from "../../src/services/get-categories";

// 7. Daten Kategorien: Daten, die wir laden, geben wir zurück

export default async function handler(req, res) {
  const categories = await getCategories();

  res.status(200).json(categories);
}
