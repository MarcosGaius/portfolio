import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <link rel="icon" href="favicon.ico" />
        <meta name="robots" content="all" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
