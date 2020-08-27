import { AppProps } from "next/app";
import "../styles/index.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="description" content="German software engineer for React.js, Node.js and GraphQL" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
