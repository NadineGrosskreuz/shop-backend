import Product from "./Product";

export default function ProductGrid({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Product
            name={product.name}
            description={product.description}
            price={product.price}
            tags={product.tags}
          />
        </li>
      ))}
    </ul>
  );
}
