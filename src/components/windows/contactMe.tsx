import { Button, ButtonGroup, Card, Divider, Text } from '@mantine/core';
import { type ReactNode, useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { Rnd } from 'react-rnd';
import { useStore } from '~/store/store';
import AppWindow from '../appWindow';
import PortfolioIcon from '../portfolioIcon';
import Link from 'next/link';

export const ContactMeIcon = () => {
    const store = useStore();
    return (
        <PortfolioIcon>
            <Button
                variant='light'
                h={'100%'}
                onClick={() => {
                    store.windows.toggleHide('contact');
                }}
            >
                <div className='flex flex-col justify-center items-center'>
                    <FaMailBulk />
                    <Text size='xs'>Contact</Text>
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
        <AppWindow window='contact' title='Contact'>
            <div className='flex justify-center items-center flex-col h-full gap-4'>
                <Button
                    component={'a'}
                    variant='subtle'
                    href='mailto:nicholas@pertinate.info'
                >
                    <FaMailBulk />
                    <Text ml={8}>nicholas@pertinate.info</Text>
                </Button>
                <Button
                    variant='subtle'
                    component={Link}
                    href={'https://github.com/pertinate'}
                    target='_blank'
                >
                    <FaGithub />
                    <Text ml={8}>Pertinate</Text>
                </Button>
                <Button
                    variant='subtle'
                    component={Link}
                    href={
                        'https://www.linkedin.com/in/nicholas-evans-712b69a4/'
                    }
                    target='_blank'
                >
                    <FaLinkedin />
                    <Text ml={8}>Nicholas Evans</Text>
                </Button>
            </div>
        </AppWindow>
    );
};

export default ContactMe;
