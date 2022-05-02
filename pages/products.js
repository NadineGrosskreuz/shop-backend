import ProductGrid from "../src/components/ProductGrid";
import { getProducts } from "../src/services/get-products";
import { AppContainer } from "../src/components/UI/AppContainer.styled";
import { CardGrid } from "../src/components/UI/CardGrid.styled";
import { Headline } from "../src/components/UI/Headline.styled";
import { SWRConfig } from "swr";
import { swrFetcher } from "../src/lib/swr-fetcher";

export async function getStaticProps() {
  const products = await getProducts();
  console.log(products);
  return {
    props: {
      fallback: {
        "/api/products": products,
      },
    },
    /*{ products },*/
  };
}

export default function Products({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <AppContainer>
        <Headline>Produkte</Headline>
        <CardGrid>
          <ProductGrid /*products={products}*/ />
        </CardGrid>
      </AppContainer>
    </SWRConfig>
  );
}
