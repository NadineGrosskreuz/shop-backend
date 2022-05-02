import { CardContainer } from "./UI/CardContainer.styled";
import Categorie from "./Categorie";
import useSWR from "swr";

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
