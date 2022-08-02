import Link from "./Link";
import Image from "next/image";
import { currencyFormat } from "lib";
export default function ProductCard({ product }) {
  const placeholderImage =
    "https://res.cloudinary.com/dsuqfsnp2/image/upload/v1658883630/cld-sample-4.jpg";
  return (
    <div className="product-card border-solid border-gray-200 border-2 bg-red-100 basis-1/5">
      <div className="bg-main active:bg-brand w-full aspect-1">
        <div className="bg-white relative hover:translate-y-[-10px] hover:translate-x-[-10px] transition-transform object-contain ">
          <Image
            src={product.image?.image || placeholderImage}
            width={305}
            height={200}
            alt={product.title}
          />
        </div>
      </div>
      <div className="details flex flex-col space-y-4">
        <p
          className="block mt-2 text-md font-extrabold text-main truncate"
          data-testid={`productName${product.name}`}
        >
          {product.title}
        </p>

        <p className="description text-gray-500">{product.description}</p>

        <span className="p-4 mt-8 relative bottom-0 left-0">
          <span>$ {currencyFormat(product.price_with_tax)}</span>
          <Link
            className="border-solid border-2 border-sky-500 bg-green-400 text-gray-50 p-2 m-2 "
            href="#"
          >
            Add to Cart
          </Link>
        </span>
      </div>
    </div>
  );
}
