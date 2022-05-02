import CategorieGrid from "../src/components/CategorieGrid";
import { getCategories } from "../src/services/get-categories";
import { AppContainer } from "../src/components/UI/AppContainer.styled";
import { CardGrid } from "../src/components/UI/CardGrid.styled";
import { Headline } from "../src/components/UI/Headline.styled";
import { SWRConfig } from "swr";
import { swrFetcher } from "../src/lib/swr-fetcher";

// 5. Daten Kategorien: statt der Daten von der API, wollen wir Fallback-Daten haben

export async function getStaticProps() {
  const categories = await getCategories();
  return {
    props: {
      fallback: {
        "/api/categories": categories,
      },
    },

    /*{ categories },*/
  };
}

export default function Categories({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <AppContainer>
        <Headline>Kategorien</Headline>
        <CardGrid>
          <CategorieGrid /*categories={categories}*/ />
        </CardGrid>
      </AppContainer>
    </SWRConfig>
  );
}
