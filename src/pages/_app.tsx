import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import { Provider } from 'react-redux';
import '../globals.scss';
import store from '../redux/store';

interface Props { }

function App({ Component, pageProps }: AppProps) {
    return (
        <div
            className=""
        >
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </div>
    );
}

export default App;
