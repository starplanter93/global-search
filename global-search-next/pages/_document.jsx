import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='kr'>
      <Head>
        <link type='img' rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
