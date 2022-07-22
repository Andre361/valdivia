import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Valdivia</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
