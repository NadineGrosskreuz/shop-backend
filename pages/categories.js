import CategorieGrid from "../src/components/CategorieGrid";
import { getCategories } from "../src/services/get-categories";

export async function getStaticProps() {
  const categories = await getCategories();
  return {
    props: { categories },
  };
}

export default function Categories({ categories }) {
  return (
    <div>
      <h1>Kategorien</h1>
      <CategorieGrid categories={categories} />
    </div>
  );
}
