import ProductGrid from "../src/components/ProductGrid";
import getProducts from "../src/services/get-products";

export function getStaticProps() {
  const products = getProducts();
  return {
    props: { products },
  };
}

export default function Products({ products }) {
  return (
    <div>
      <h1>Produkte</h1>
      <ProductGrid products={products} />
    </div>
  );
}
