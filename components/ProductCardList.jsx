import ProductCard from "./ProductCard";

export default function ProductCardList({ products }) {
  return (
    <ul className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {products.map((p) => (
        <ProductCard product={p} key={p.id} />
      ))}
    </ul>
  );
}
