import ProductCard from "./ProductCard";
import { currencyFormat } from "lib";
export function ProductCardList({ products }) {
  return (
    <ul className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {products.map((p) => (
        <ProductCard product={p} key={p.id} />
      ))}
    </ul>
  );
}

function ProductGrid({ products }) {
  const placeholderImage =
    "https://res.cloudinary.com/dsuqfsnp2/image/upload/v1658883630/cld-sample-4.jpg";
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
        {products.data?.map((product) => (
          <a key={product?.id} href={product?.href} clrelativeassname="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative">
              <img
                className="w-full h-full object-center object-cover group-hover:opacity-75"
                src={product?.image?.image || placeholderImage}
                alt={product?.title}
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product?.title}</h3>
            <span className="mt-1 text-lg font-medium text-gray-900">
              $ {currencyFormat(product?.price_with_tax)}{" "}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
export default ProductGrid;
