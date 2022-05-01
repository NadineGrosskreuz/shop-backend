import { CardContainer } from "./UI/CardContainer.styled";
import Product from "./Product";
import useSWR from "swr";

export default function ProductGrid(
  {
    /*products*/
  }
) {
  const { data, error } = useSWR("/api/products");
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <CardContainer>
      {data.map((product) => (
        <li key={product.id}>
          <Product
            name={product.name}
            description={product.description}
            price={product.price}
            tags={product.tags}
          />
        </li>
      ))}
    </CardContainer>
  );
}
