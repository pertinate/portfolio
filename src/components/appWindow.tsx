import { Card, ButtonGroup, Button, Divider, Text } from '@mantine/core';
import { ReactNode } from 'react';
import {
    FaWindowMinimize,
    FaWindowMaximize,
    FaWindowClose,
} from 'react-icons/fa';
import { Rnd } from 'react-rnd';
import { useStore } from '~/store/store';
import { windowsKey } from './windowRouter';

interface Props {
    children?: ReactNode;
    window: windowsKey;
    title: string;
}

const AppWindow = (props: Props) => {
    const store = useStore();
    return (
        <Rnd
            default={{
                x: 0,
                y: 0,
                width: 320,
                height: 200,
            }}
            style={{
                display: store.windows.hidden.includes(props.window)
                    ? 'none'
                    : 'block',
            }}
            bounds={'parent'}
        >
            <Card
                withBorder
                style={{
                    width: '100%',
                    height: '100%',
                    padding: 0,
                    margin: 0,
                }}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            >
                <div className='flex gap-8 pl-4 items-center'>
                    <Text className='select-none grow'>{props.title}</Text>
                    <ButtonGroup>
                        <Button
                            variant='default'
                            onClick={() => store.windows.hide(props.window)}
                        >
                            <FaWindowMinimize />
                        </Button>
                        <Button variant='default'>
                            <FaWindowMaximize />
                        </Button>
                        <Button
                            variant='default'
                            onClick={() => {
                                store.windows.remove(props.window);
                            }}
                        >
                            <FaWindowClose />
                        </Button>
                    </ButtonGroup>
                </div>
                <Divider />
                <div className='test-body'>{props.children}</div>
            </Card>
        </Rnd>
    );
};

export default AppWindow;
