// testfeatures
import { getProducts } from "../lib/products";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  dehydrate,
  QueryClient,
  useQuery,
  QueryClientProvider,
} from "react-query";
const queryClient = new QueryClient();
export async function getStaticProps() {
  const products = await getProducts();

  return { props: { products } };
}

export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Example />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

function Example(props) {
  const { isLoading, error, data } = useQuery("products-list", getProducts, {
    initialData: props.products,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {data.results && data.results.map((i) => <div key={i.id}>{i.title}</div>)}
    </div>
  );
}
