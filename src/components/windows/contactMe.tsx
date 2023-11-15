import { Button, ButtonGroup, Card, Divider, Text } from '@mantine/core';
import { type ReactNode, useEffect, useState } from 'react';
import {
    FaWindowMinimize,
    FaWindowMaximize,
    FaWindowClose,
    FaMailBulk,
} from 'react-icons/fa';
import { Rnd } from 'react-rnd';
import { useStore } from '~/store/store';
import AppWindow from '../appWindow';
import PortfolioIcon from '../portfolioIcon';

export const ContactMeIcon = () => {
    const store = useStore();
    return (
        <PortfolioIcon>
            <Button
                variant='light'
                h={'100%'}
                onClick={() => {
                    store.windows.hide('contact_me');
                }}
            >
                <div className='flex flex-col justify-center items-center'>
                    <FaMailBulk />
                    <Text size='xs'>Contact Me</Text>
                </div>
            </Button>
        </PortfolioIcon>
    );
};

interface Props {
    children?: ReactNode;
}

const ContactMe = (props: Props) => {
    return (
        <AppWindow window='contact_me' title='Contact Me'>
            <div>This is on how to contact Nicholas Evans</div>
        </AppWindow>
    );
};

export default ContactMe;
