import Categorie from "./Categorie";

export default function CategorieGrid({ categories }) {
  return (
    <ul>
      {categories.map((categorie) => (
        <li key={categorie.id}>
          <Categorie
            name={categorie.name}
            description={categorie.description}
          />
        </li>
      ))}
    </ul>
  );
}
