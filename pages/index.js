import axios from "axios";
import { BASE_URL } from "../constants";

export async function getStaticProps() {
  const res = await axios.get(`${BASE_URL}/store/products/`);
  const products = await res.data;
  return { props: { products } };
}
export default function Home(props) {
  const { products } = props;
  return (
    <div className="container">
      {products &&
        products.results.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
    </div>
  );
}
