import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=optimal"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/favicon.png" />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/touch-icon-144-precomposed.png"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
