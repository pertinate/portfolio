import React from 'react';
import Document, {
    Head,
    Html, Main, NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
// import { darkTheme } from '../theme';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="theme-color" content={'dark'} />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,700&display=swap"
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

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};