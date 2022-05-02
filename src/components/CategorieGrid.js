import { CardContainer } from "./UI/CardContainer.styled";
import Categorie from "./Categorie";
import useSWR from "swr";

// 6. Daten Kategorien: einzelne Komponenten werden erstellt; Daten kommen unter data an und wir laufen mit map über die Daten und rendern jeweils eine Komponente, die eine Kategorie darstellt
// useSWR: um effizient Daten zu laden; Daten laden und anschließend anzeigen

export default function CategorieGrid() {
  /*{
    /*categories
  }
) {*/
  const { data, error } = useSWR("/api/categories");
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <CardContainer>
      {data.map((category) => (
        <li key={category.id}>
          <Categorie
            name={category.name}
            description={category.description}
            id={category.id}
          />
        </li>
      ))}
    </CardContainer>
  );
}
