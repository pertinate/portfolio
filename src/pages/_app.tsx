import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import { Provider } from 'react-redux';
import '../styles/globals.scss';
import store from '../redux/store';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from '../theme';

interface Props { }

function App({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);
    return (
        <React.Fragment>
            <Head>
                <title>Nicholas Evans</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
