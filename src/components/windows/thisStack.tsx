import { Button, Card, Divider, List, Text } from '@mantine/core';
import { FaPersonBooth, FaQuestion } from 'react-icons/fa';
import AppWindow from '../appWindow';
import PortfolioIcon from '../portfolioIcon';
import { useStore } from '~/store/store';

export const ThisStackIcon = () => {
    const store = useStore();
    return (
        <PortfolioIcon>
            <Button
                variant='light'
                h={'100%'}
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
            height={540}
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
                                <Button variant='light'>Next.js</Button>
                            </List.Item>
                            <List.Item>
                                <Button variant='light'>Prisma</Button>
                            </List.Item>
                            <List.Item>
                                <Button variant='light'>Mantine</Button>
                            </List.Item>
                            <List.Item>
                                <Button variant='light'>Zustand</Button>
                            </List.Item>
                            <List.Item>
                                <Button variant='light'>Zod</Button>
                            </List.Item>
                            <List.Item>
                                <Button variant='light'>Tailwind</Button>
                            </List.Item>
                        </List>
                    </div>
                </Card>
            </div>
        </AppWindow>
    );
};

export default ThisStack;
