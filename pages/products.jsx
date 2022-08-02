import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { fetchProductsPerPage } from "lib";
// TODO: use next link to fetch data additional Data onCLick
export default function Products() {
  const [data, setData] = useState([]);
  const [isLoading, SetisLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setcurrentPage] = useState(1);
  const updatePage = () => setcurrentPage((prev) => prev + 1);
  // async () => {
  //   const products = await fetchNewProducts(currentPage);
  //   return setData((prevData) => [...prevData, ...products]);
  // }

  // useEffect(() => {
  //   SetisLoading(true);
  //   fetchProducts()
  //     .then((response) => {
  //       setData(response);
  //       SetisLoading(false);
  //     })
  //     .catch((error) => setError(error));
  // }, []);

  // const fetchNewProducts = (page) =>
  //   fetchProductsPerPage(page).then((response) => response.results);
  useEffect(() => {
    (async () => {
      const response = await fetchProductsPerPage(currentPage);
      const products = response.results;
      setData((prev) => [...prev, ...products]);
    })();
  }, [currentPage]);

  if (!data) return "data is absent";
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <div className="product-list bg-blue-200 flex flex-wrap justify-center p-2  ">
        {isLoading
          ? "Loading..."
          : data?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        <button className="bg-gray-100 p-4 m-2" onClick={updatePage}>
          More Products
        </button>
      </div>
    </>
  );
}
