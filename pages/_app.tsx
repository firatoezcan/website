import { AppProps } from "next/app";
import "../styles/prose.css";
import "../styles/index.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
