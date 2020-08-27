import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="German software engineer for React.js, Node.js and GraphQL" />
          <meta name="twitter:title" content="Firat Özcan | Fullstack JS" />
          <meta name="twitter:description" content="German software engineer for React.js, Node.js and GraphQL" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
