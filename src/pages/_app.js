import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "@/styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>MyQR Code</title>
          <link rel="shortcut icon" href="/img/logo.webp" type="image/x-icon" />
          <meta name="description" content="QRfy your processes" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
