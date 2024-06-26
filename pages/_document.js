import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* eslint-disable-next-line */}

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-, {cookie_flags: 'SameSite=None;Secure',
                                page_path: window.location.pathname,
                                });
                            `,
            }}
          />
          <meta charSet="utf-8" />

          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches&display=optional"
          />

          {/*       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/css/uikit.min.css" /> */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/uikit@3.9.4/dist/css/uikit.min.css"
          />
          <script
            async
            src="https://cdn.jsdelivr.net/npm/uikit@3.9.4/dist/js/uikit.min.js"
          ></script>
          <script
            async
            src="https://cdn.jsdelivr.net/npm/uikit@3.9.4/dist/js/uikit-icons.min.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
