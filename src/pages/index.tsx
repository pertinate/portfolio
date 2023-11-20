import {
    Button,
    ButtonGroup,
    Card,
    Divider,
    Text,
    useMantineColorScheme,
} from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';

const SystemTime = dynamic(() => import('../components/systemTime'), {
    ssr: false,
});

// import { api } from '~/utils/api';
import {
    FaPersonBooth,
    FaMailBulk,
    FaThemeco,
    FaThemeisle,
    FaToggleOn,
} from 'react-icons/fa';
import dynamic from 'next/dynamic';
import PortfolioIcon from '~/components/portfolioIcon';
import windowRouter, {
    iconRouter,
    windowsKey,
} from '~/components/windowRouter';
import { useStore } from '~/store/store';
import { AboutMeIcon } from '~/components/windows/aboutMe';
import { ContactMeIcon } from '~/components/windows/contactMe';
import { ThisStackIcon } from '~/components/windows/thisStack';
import { CurrentProjectsIcon } from '~/components/windows/currentProjects';
import { SignInButton, SignedOut, UserButton, useAuth } from '@clerk/nextjs';
import { GetServerSideProps } from 'next';
import { buildClerkProps, getAuth } from '@clerk/nextjs/server';
import { CalculatorIcon } from '~/components/windows/apps/calculator';

export default function Home() {
    const store = useStore();
    // const hello = api.post.hello.useQuery({ text: 'from tRPC' });
    const mantineColorScheme = useMantineColorScheme();
    const auth = useAuth();

    const isMobile = useMediaQuery('(max-width: 900px)');
    return (
        <>
            <Head>
                <title>Nicholas Evans - Pertinate</title>
                <meta
                    name='description'
                    content='Passionate Software Engineer with 4 years of experience in full-stack web development, specializing in TypeScript. Experienced in creating innovative solutions, from integrated API calls to developing a website for in-game item trading.'
                />
                <meta
                    property='og:title'
                    content='Nicholas Evans - Pertinate'
                />
                <meta
                    property='og:description'
                    content='Passionate Software Engineer with 4 years of experience in full-stack web development, specializing in TypeScript. Experienced in creating innovative solutions, from integrated API calls to developing a website for in-game item trading.'
                />
                <meta property='og:image' content='/favicon.ico' />
            </Head>
            <main className='h-full flex flex-col'>
                {/* {auth.userId} */}
                {/* <Socials /> */}
                {/* {isMobile == true && 'test'} */}
                <div className='grow'>
                    <div className='flex flex-wrap gap-4 m-2'>
                        <AboutMeIcon />
                        <ContactMeIcon />
                        <ThisStackIcon />
                        <CurrentProjectsIcon />
                        <CalculatorIcon />
                    </div>
                    {store.windows.opened.map(entry => (
                        <>{windowRouter(entry)}</>
                    ))}
                </div>
                <Card
                    className='rounded-b-none'
                    style={{
                        borderRadius: 0,
                        padding: 0,
                    }}
                    withBorder
                >
                    <div className='flex h-12 items-center'>
                        <div className='grow flex gap-2 ml-1'>
                            <PortfolioIcon>
                                <UserButton afterSignOutUrl='/' />
                                <SignedOut>
                                    {/* Signed out users get sign in button */}
                                    <SignInButton mode='modal' />
                                </SignedOut>
                            </PortfolioIcon>
                            {store.windows.opened.map(entry => (
                                <>{iconRouter(entry)}</>
                            ))}
                        </div>
                        <SystemTime />
                    </div>
                </Card>
            </main>
        </>
    );
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async ctx => {
    const { userId } = getAuth(ctx.req);

    if (!userId) {
        // handle user is not logged in.
    }

    // Load any data your application needs for the page using the userId
    return { props: { ...buildClerkProps(ctx.req) } };
};
