import { Button, Card, Divider, List, Text } from '@mantine/core';
import { FaBuffer } from 'react-icons/fa';
import AppWindow from '../appWindow';
import PortfolioIcon from '../portfolioIcon';
import { useStore } from '~/store/store';
import InfoCard from '../infoCard';
import Link from 'next/link';

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
    return (
        <AppWindow
            window='current_projects'
            title={`Current Projects`}
            width={720}
            height={540}
        >
            <div className='flex gap-4 mx-2 flex-col'>
                <InfoCard title='Portfolio'>
                    <Text>{`The Personal Portfolio is a dynamic and interactive web application built using the powerful T3 stack, featuring Next.js, trpc, Mantine, Prisma, and Zustand. This platform serves as my dedicated digital playground, designed to showcase a diverse array of projects and provide a centralized space for individuals and organizations to connect with me regarding job opportunities.`}</Text>
                    <Text>{`Utilizing the latest technologies, the portfolio offers a seamless and engaging user experience, allowing visitors to explore my projects, delve into their details, and gain insights into my skill set and capabilities. The inclusion of the T3 stack ensures robustness, scalability, and a modern development approach.`}</Text>
                    <Text>{`As a dynamic hub for my professional endeavors, the portfolio emphasizes not only the projects themselves but also acts as a point of contact for potential job offers and collaborations. Its purpose is to reflect my passion for technology, innovation, and continual learning, making it a valuable resource for anyone interested in exploring my work and reaching out for potential collaborations or employment opportunities.`}</Text>
                    <Button
                        variant='light'
                        component={Link}
                        href={'https://github.com/pertinate/portfolio'}
                        target='_blank'
                    >
                        View Code
                    </Button>
                </InfoCard>
                <InfoCard title='Fullstack Template'>
                    <Text>{`This project is a versatile template designed for efficient server-side rendering (SSR) using a stack that includes Mantine, React Router Dom, Fastify, Vite, Tailwind, Prisma, and Zod for packages and types. A key feature is the seamless sharing of types between the backend and frontend through the packages/types module, fostering consistency and reducing redundancy.`}</Text>
                    <Text>{`This template serves as an ideal starting point for projects requiring SSR, offering a robust foundation for mocking server-side rendering and providing easy access to meta tags. The shared module, encompassing routes, backend types, and frontend types, ensures a unified development experience by maintaining a single source of truth for data structures.`}</Text>
                    <Text>{`The integration of Zod for validation within the shared module enhances data integrity, offering a reliable mechanism for enforcing data constraints across both the frontend and backend. With a focus on modularity and maintainability, this SSR template empowers developers to accelerate their projects by providing a standardized structure and shared types for seamless communication between the server and client components.`}</Text>
                    <Button
                        variant='light'
                        component={Link}
                        href={'https://github.com/pertinate/fullstack-template'}
                        target='_blank'
                    >
                        View Code
                    </Button>
                </InfoCard>
                <InfoCard title='Median XL Trade Site'>
                    <div className='flex flex-col gap-4'>
                        <Text>{`The Median XL Trade Site is a dynamic web application crafted with the cutting-edge T3 stack, featuring technologies such as Next.js, trpc, Mantine, Prisma, and Zustand. Utilizing a robust PostgreSQL database, this platform is tailored for facilitating item trading among players within the gaming community.`}</Text>
                        <Text>{`One distinctive aspect of the project lies in its integration with Discord for Single Sign-On (SSO) functionality, providing a seamless user experience. Additionally, Discord serves as the central hub for communication between players involved in the trading process.`}</Text>
                        <Text>{`While the codebase is regrettably private, a key highlight is the innovative item processing system implemented for the trade site. The platform leverages character APIs to link game accounts to Discord profiles, enabling efficient management of item pricing. This approach not only enhances user engagement but also streamlines the trading experience by providing a centralized platform for players to negotiate and finalize transactions.`}</Text>
                        <Text>{`Please note that due to the private nature of the code, specific details cannot be shared. However, the project's emphasis on secure, efficient, and integrated item trading sets it apart within the gaming community.`}</Text>
                        <Button
                            variant='light'
                            component={Link}
                            href={
                                'https://github.com/pertinate/trade-center-item-processing'
                            }
                            target='_blank'
                        >
                            View Item Processing Code
                        </Button>
                    </div>
                </InfoCard>
            </div>
        </AppWindow>
    );
};

export default CurrentProjects;
