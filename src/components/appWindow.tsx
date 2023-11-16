import { Card, ButtonGroup, Button, Divider, Text } from '@mantine/core';
import { ReactNode, useEffect, useState } from 'react';
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
    width?: number;
    height?: number;
}

const AppWindow = (props: Props) => {
    const store = useStore();
    const [containerSize, setContainerSize] = useState({
        width: props.width ?? 320,
        height: props.height ?? 250,
    });
    const [containerPosition, setContainerPosition] = useState({
        x: Math.floor(screen.availWidth / 2) - containerSize.width / 2,
        y: Math.floor(screen.availHeight / 2) - containerSize.height / 2,
    });

    return (
        <Rnd
            key={props.window}
            style={{
                display: store.windows.hidden.includes(props.window)
                    ? 'none'
                    : 'block',
            }}
            bounds={'parent'}
            size={{ width: containerSize.width, height: containerSize.height }}
            position={{ x: containerPosition.x, y: containerPosition.y }}
            onDragStop={(e, d) => {
                setContainerPosition({ x: d.x, y: d.y });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                setContainerSize({
                    width: Number(ref.style.width),
                    height: Number(ref.style.height),
                    ...position,
                });
            }}
            cancel='#no-drag'
            dragHandleClassName='drag-only'
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
                <div className='flex gap-8 items-center'>
                    <div className='grow drag-only cursor-move pl-4'>
                        <Text>{props.title}</Text>
                    </div>
                    <ButtonGroup>
                        <Button
                            variant='default'
                            onClick={() =>
                                store.windows.toggleHide(props.window)
                            }
                        >
                            <FaWindowMinimize />
                        </Button>
                        <Button
                            variant='default'
                            onClick={() => {
                                setContainerSize({
                                    width: screen.width,
                                    height: screen.height - 300,
                                });
                                setContainerPosition({
                                    x: 0,
                                    y: 0,
                                });
                            }}
                        >
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
                <div className='overflow-auto grow' id='no-drag'>
                    {props.children}
                </div>
            </Card>
        </Rnd>
    );
};

export default AppWindow;
