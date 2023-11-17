import { Button, Card, Divider, List, Text } from '@mantine/core';
import { FaBuffer } from 'react-icons/fa';
import AppWindow from '../appWindow';
import PortfolioIcon from '../portfolioIcon';
import { useStore } from '~/store/store';

export const CurrentProjectsIcon = () => {
    const store = useStore();
    return (
        <PortfolioIcon>
            <Button
                variant='light'
                h={'100%'}
                fullWidth
                onClick={() => {
                    store.windows.toggleHide('current_projects');
                }}
            >
                <div className='flex flex-col justify-center items-center'>
                    <FaBuffer />
                    <Text size='xs'>Current Projects</Text>
                </div>
            </Button>
        </PortfolioIcon>
    );
};

const CurrentProjects = () => {
    const store = useStore();
    return (
        <AppWindow
            window='current_projects'
            title={`Current Projects`}
            width={420}
            height={540}
        >
            <Text>TBD</Text>
        </AppWindow>
    );
};

export default CurrentProjects;
