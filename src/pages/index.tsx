import { Button, ButtonGroup, Card, Divider, Text } from '@mantine/core';
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
import { FaPersonBooth, FaMailBulk } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import PortfolioIcon from '~/components/portfolioIcon';
import windowRouter, { windowsKey } from '~/components/windowRouter';
import { useStore } from '~/store/store';

export default function Home() {
    const store = useStore();
    // const hello = api.post.hello.useQuery({ text: 'from tRPC' });
    const [openWindows, setOpenWindows] = useState<windowsKey[]>([]);

    const isMobile = useMediaQuery('(max-width: 900px)');
    return (
        <>
            <Head>
                <title>Nicholas Evans</title>
            </Head>
            <main className='h-full flex flex-col'>
                {/* <Socials /> */}
                {isMobile == true && 'test'}
                <div className='grow'>
                    <div className='flex flex-wrap gap-10 m-2 mx-10'>
                        <PortfolioIcon>
                            <Button
                                variant='light'
                                h={'100%'}
                                onClick={() => {
                                    store.windows.add('about_me');
                                }}
                            >
                                <div className='flex flex-col justify-center items-center'>
                                    <FaPersonBooth />
                                    <Text size='xs'>About Me</Text>
                                </div>
                            </Button>
                        </PortfolioIcon>
                        <PortfolioIcon>
                            <Button
                                variant='light'
                                h={'100%'}
                                onClick={() => {
                                    store.windows.add('contact_me');
                                }}
                            >
                                <div className='flex flex-col justify-center items-center'>
                                    <FaMailBulk />
                                    <Text size='xs'>Contact Me</Text>
                                </div>
                            </Button>
                        </PortfolioIcon>
                        {/* {new Array(50).fill(null).map((_, idx) => {
                            return (
                                <div
                                    className='w-16 h-16 flex justify-center items-center'
                                    key={`app-${idx}`}
                                >
                                    <Button variant='light' h={'100%'}>
                                        <div className='flex flex-col justify-center items-center'>
                                            <FaPersonBooth />
                                            <Text size='xs'>About Me</Text>
                                        </div>
                                    </Button>
                                </div>
                            );
                        })} */}
                        {/* <div className='grow flex-shrink-0 basis-auto' /> */}
                    </div>
                    {store.windows.opened.map(entry => (
                        <>{windowRouter(entry)}</>
                    ))}
                    {/* 6 */}
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
                        <div className='grow'>grow</div>
                        <SystemTime />
                    </div>
                </Card>
            </main>
        </>
    );
}
