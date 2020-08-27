import { AppProps } from "next/app";
import "../styles/index.css";
import Head from "next/head";
import { getImage } from "utils";

export default function MyApp({ Component, pageProps }: AppProps) {
  const image = getImage("static/Firat-1.jpg");
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* Primary Meta Tags */}
        <title>Firat Özcan | Homepage</title>
        <meta name="title" content="Firat Özcan | Homepage" />
        <meta name="description" content="Freiberuflicher Software Entwickler für React.js, Node.js und GraphQL" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://firatoezcan.com/" />
        <meta property="og:title" content="Firat Özcan | Homepage" />
        <meta property="og:description" content="Freiberuflicher Software Entwickler für React.js, Node.js und GraphQL" />
        <meta property="og:image" content={image.images[3].path} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://firatoezcan.com/" />
        <meta property="twitter:title" content="Firat Özcan | Homepage" />
        <meta property="twitter:description" content="Freiberuflicher Software Entwickler für React.js, Node.js und GraphQL" />
        <meta property="twitter:image" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
