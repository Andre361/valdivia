import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "lib";

export default function Products() {
  const [data, setData] = useState([]);
  const [isLoading, SetisLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    SetisLoading(true);
    fetchProducts()
      .then((response) => {
        setData(response);
        SetisLoading(false);
      })
      .catch((error) => setError(error));
  }, []);
  if (isLoading) return "Loading...";
  if (!data) return "data is absent";
  if (error) return <p>{error.message}</p>;
  return (
    <div className="product-list bg-blue-200 flex flex-wrap p-2">
      {data?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
