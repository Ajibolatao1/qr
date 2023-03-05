import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "@/styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MyQR Code</title>
        <link rel="shortcut icon" href="/img/logo.webp" type="image/x-icon" />
        <meta name="description" content="QRfy your processes" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
