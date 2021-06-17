import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";


class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {

    return (
      <Html>
        <Head>
          {/* Open Graph */}
          <meta property="og:title" content="Garrett Jester" />
          <meta property="og:description" content="Founder, developer, designer" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={process.env.NEXT_PUBLIC_DOMAIN}
          />
          <meta
            property="og:site_name"
            content={process.env.NEXT_PUBLIC_APP_NAME}
          />

          {/* Open Graph Image */}
          <meta property="og:image" content={process.env.NEXT_OG_IMAGE_URL} />
          <meta
            property="og:image:secure_url"
            content={process.env.NEXT_OG_IMAGE_URL}
          />
          <meta property="og:image:type" content="image/jpg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Add Material-UI StyleSheets
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
