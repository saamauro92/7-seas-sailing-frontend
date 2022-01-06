import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="zxx">
                <Head>
                    {/* eslint-disable-next-line */}
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Staatliches"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
                    />
                    <script
                        async
                        strategy="beforeInteractive"
                        src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"
                    />
                    <script
                        async
                        strategy="beforeInteractive"
                        src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js"
                    />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;