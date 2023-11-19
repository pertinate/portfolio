import { Button, Card, Divider, List, Text } from '@mantine/core';
import { FaPersonBooth, FaQuestion } from 'react-icons/fa';
import AppWindow from '../appWindow';
import PortfolioIcon from '../portfolioIcon';
import { useStore } from '~/store/store';
import Link from 'next/link';

export const ThisStackIcon = () => {
    const store = useStore();
    return (
        <PortfolioIcon>
            <Button
                variant='light'
                h={'100%'}
                fullWidth
                onClick={() => {
                    store.windows.toggleHide('this_stack');
                }}
            >
                <div className='flex flex-col justify-center items-center'>
                    <FaQuestion />
                    <Text size='xs'>This Stack</Text>
                </div>
            </Button>
        </PortfolioIcon>
    );
};

const ThisStack = () => {
    const store = useStore();
    return (
        <AppWindow
            window='this_stack'
            title={`What's used in this stack`}
            width={420}
            height={600}
        >
            <div className='p-4'>
                <Text>
                    While this is mainly made to be a portfolio, this will also
                    serve as my playground. I will expose what I make and what I
                    am currently playing around with as &quot;apps&quot;. Some
                    of the tech stack will be for other parts of this
                    playground.
                </Text>
                <Card
                    withBorder
                    style={{
                        width: '100%',
                        height: '100%',
                        padding: 0,
                    }}
                    className='mt-4'
                >
                    <div className='flex gap-8 items-center max-w-full'>
                        <div className='grow drag-only cursor-move pl-4'>
                            <Text>Tech used for this site</Text>
                        </div>
                    </div>
                    <Divider />
                    <div className='my-4'>
                        <List icon={<></>} spacing={'xs'}>
                            <List.Item>
                                <Button
                                    component={Link}
                                    href={'https://nextjs.org/'}
                                    variant='light'
                                    target='_blank'
                                >
                                    Next.js
                                </Button>
                            </List.Item>
                            <List.Item>
                                <Button
                                    component={Link}
                                    href={'https://create.t3.gg/'}
                                    variant='light'
                                    target='_blank'
                                >
                                    T3
                                </Button>
                            </List.Item>
                            <List.Item>
                                <Button
                                    component={Link}
                                    href={'https://www.prisma.io/'}
                                    variant='light'
                                    target='_blank'
                                >
                                    Prisma
                                </Button>
                            </List.Item>
                            <List.Item>
                                <Button
                                    component={Link}
                                    href={'https://mantine.dev/'}
                                    variant='light'
                                    target='_blank'
                                >
                                    Mantine
                                </Button>
                            </List.Item>
                            <List.Item>
                                <Button
                                    component={Link}
                                    href={'https://github.com/pmndrs/zustand'}
                                    variant='light'
                                    target='_blank'
                                >
                                    Zustand
                                </Button>
                            </List.Item>
                            <List.Item>
                                <Button
                                    component={Link}
                                    href={'https://zod.dev/'}
                                    variant='light'
                                    target='_blank'
                                >
                                    Zod
                                </Button>
                            </List.Item>
                            <List.Item>
                                <Button
                                    component={Link}
                                    href={'https://tailwindcss.com/'}
                                    variant='light'
                                    target='_blank'
                                >
                                    Tailwind
                                </Button>
                            </List.Item>
                        </List>
                    </div>
                </Card>
            </div>
        </AppWindow>
    );
};

export default ThisStack;
