import mongoose from "mongoose";

//2. Daten Kategorien: Datenstruktur des Objekts in der Datenbank beschreiben

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
});
const Category =
  mongoose.models.Category ?? mongoose.model("Category", categorySchema);

export default Category;
