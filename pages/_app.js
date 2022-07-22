import "../styles/globals.css";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Layout from "@/components/layouts";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
