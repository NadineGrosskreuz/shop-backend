import ProductGrid from "../src/components/ProductGrid";
import { getProducts } from "../src/services/get-products";
import { AppContainer } from "../src/components/UI/AppContainer.styled";
import { CardGrid } from "../src/components/UI/CardGrid.styled";
import { Headline } from "../src/components/UI/Headline.styled";

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}

export default function Products({ products }) {
  return (
    <>
      <AppContainer>
        <Headline>Produkte</Headline>
        <CardGrid>
          <ProductGrid products={products} />
        </CardGrid>
      </AppContainer>
    </>
  );
}
