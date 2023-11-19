import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';
import { MantineProvider, createTheme } from '@mantine/core';
import { ClerkProvider } from '@clerk/nextjs';

import { api } from '~/utils/api';

import '~/styles/globals.css';

import '@mantine/core/styles.css';

const theme = createTheme({
    /** Put your mantine theme override here */
    white: '#F9F9F9',
});

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <ClerkProvider {...pageProps}>
            <MantineProvider theme={theme} defaultColorScheme='dark'>
                <Component {...pageProps} />
            </MantineProvider>
        </ClerkProvider>
    );
};

export default api.withTRPC(MyApp);
