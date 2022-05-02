import ProductGrid from "../src/components/ProductGrid";
import { getProducts } from "../src/services/get-products";
import { AppContainer } from "../src/components/UI/AppContainer.styled";
import { CardGrid } from "../src/components/UI/CardGrid.styled";
import { Headline } from "../src/components/UI/Headline.styled";
import { SWRConfig } from "swr";
import { swrFetcher } from "../src/lib/swr-fetcher";

//4. Daten Produkte:

export async function getStaticProps() {
  //wir warten, dass es mit getProducts verbunden wird
  const products = await getProducts();
  return {
    props: {
      fallback: {
        "/api/products": products,
      },
    },
    /*{ products },*/
  };
}

//alles, was als prop returnt wird, wird als prop in die Funktion unten übergeben

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
