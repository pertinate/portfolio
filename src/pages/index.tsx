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

export default function Home() {
    const store = useStore();
    // const hello = api.post.hello.useQuery({ text: 'from tRPC' });
    const mantineColorScheme = useMantineColorScheme();

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
                {/* <Socials /> */}
                {isMobile == true && 'test'}
                <div className='grow'>
                    <div className='flex flex-wrap gap-10 m-2 mx-10'>
                        <AboutMeIcon />
                        <ContactMeIcon />
                        <ThisStackIcon />
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
                        <div className='grow flex gap-10 ml-5'>
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
