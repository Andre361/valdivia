import { useReducer, useEffect } from "react";
import { fetchProductDetails } from "lib";
import ProductGrid from "@/components/ProductCardList";

// TODO: use next link to fetch data additional Data onCLick
const productsReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "PRODUCTS_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        nextPage: action.payload.next,
        data:
          action.payload.next === ""
            ? action.payload.list
            : state.data.concat(action.payload.list),
      };
    case "PRODUCTS_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
  }
};
export default function Products() {
  const [products, dispatchProducts] = useReducer(productsReducer, {
    nextPage: "",
    data: [],
    isLoading: false,
    isError: false,
  });
  useEffect(() => {
    dispatchProducts({ type: "PRODUCTS_FETCH_INIT" });

    fetchProductDetails()
      .then((result) =>
        dispatchProducts({
          type: "PRODUCTS_FETCH_SUCCESS",
          payload: { list: result.results, next: result.next },
        })
      )
      .catch(() => dispatchProducts("PRODUCTS_FETCH_FALURE"));
  }, []);

  const handleMore = () => {
    const url = products.nextPage;
    dispatchProducts({ type: "PRODUCTS_FETCH_INIT" });
    fetchProductDetails(url)
      .then((result) =>
        dispatchProducts({
          type: "PRODUCTS_FETCH_SUCCESS",
          payload: { list: result.results, next: result.next },
        })
      )
      .catch(() => dispatchProducts("PRODUCTS_FETCH_FALURE"));
  };
  return (
    <div>
      {products?.isError && <p>Something went wrong ...</p>}

      <div className="bg-white">
        <ProductGrid products={products} />

        <span className="mb-4 flex justify-center">
          <button
            className="text-white  bg-blue-700 focus:ring-4 focus:outline-none font-lg rounded-lg px-5 py-2.5 text-center"
            onClick={handleMore}
          >
            {products?.isLoading ? <Loader /> : "More"}
          </button>
        </span>
      </div>
    </div>
  );
}

function Loader() {
  return (
    <span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#fff"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </span>
  );
}
