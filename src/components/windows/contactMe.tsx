import { Button, ButtonGroup, Card, Divider, Text } from '@mantine/core';
import { type ReactNode, useEffect, useState } from 'react';
import {
    FaWindowMinimize,
    FaWindowMaximize,
    FaWindowClose,
} from 'react-icons/fa';
import { Rnd } from 'react-rnd';
import { useStore } from '~/store/store';

interface Props {
    children?: ReactNode;
}

const ContactMe = (props: Props) => {
    const store = useStore();
    return (
        <Rnd
            default={{
                x: 0,
                y: 0,
                width: 320,
                height: 200,
            }}
        >
            <Card
                withBorder
                style={{
                    width: '100%',
                    height: '100%',
                    padding: 0,
                }}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            >
                <Card.Section>
                    <div className='flex gap-8 pl-4 items-center mx-4 mt-4'>
                        <Text className='select-none grow'>Contact Me</Text>
                        <ButtonGroup>
                            <Button variant='default'>
                                <FaWindowMinimize />
                            </Button>
                            <Button variant='default'>
                                <FaWindowMaximize />
                            </Button>
                            <Button
                                variant='default'
                                onClick={() => {
                                    store.windows.remove('contact_me');
                                }}
                            >
                                <FaWindowClose />
                            </Button>
                        </ButtonGroup>
                    </div>
                    <Divider />
                </Card.Section>
                <div>This is on how to contact Nicholas Evans</div>
                {/* <Text>This is content for the window</Text>
                            <Text>This is content for the window</Text>
                            <Text>This is content for the window</Text>
                            <Text>This is content for the window</Text>
                            <Text>This is content for the window</Text> */}
            </Card>
        </Rnd>
    );
};

export default ContactMe;
