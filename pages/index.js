import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getProducts } from "../lib/products";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

function Example(props) {
  const { isLoading, error, data } = useQuery("product-list", getProducts, {
    initialData: [props.products],
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {data.results.map((i) => (
        <div key={i.id}>{i.title}</div>
      ))}
    </div>
  );
}
