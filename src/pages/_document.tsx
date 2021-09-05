import Document, { Html, Head, Main, NextScript } from 'next/document'
import siteFont from '../lib/siteFont';

class CustomDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang='ja'>
                <Head>
                    <link rel="shortcut icon" href="https://github.com/rrih.png" />
                    <style>{`html,body { margin: 0; padding: 0; }`}</style>
                </Head>
                <body style={{fontFamily: siteFont}}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;