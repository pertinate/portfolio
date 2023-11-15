import { Button, Text } from '@mantine/core';
import { FaPersonBooth } from 'react-icons/fa';
import AppWindow from '../appWindow';
import PortfolioIcon from '../portfolioIcon';
import { useStore } from '~/store/store';

export const AboutMeIcon = () => {
    const store = useStore();
    return (
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
    );
};

const AboutMe = () => {
    return (
        <AppWindow window='about_me' title='About Me'>
            <div>This is a window all about Nicholas Evans</div>
        </AppWindow>
    );
};

export default AboutMe;
