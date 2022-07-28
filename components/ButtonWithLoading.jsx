import { fetchProducts } from "lib/fetchProducts";

export default function ButtonWithLoading() {
  withLoading(Button);
}

export function Button({ onClick }) {
  <button className="p-4 bg-blue-500" onClick={onClick}>
    Load more
  </button>;
}
const withLoading = function (Component) {
  ({ loading, ...rest }) => (loading ? "Loading..." : <Component {...rest} />);
};
