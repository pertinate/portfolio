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
                    store.windows.toggleHide('about_me');
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
    const store = useStore();
    return (
        <AppWindow window='about_me' title='About Me' width={978} height={670}>
            <section className='flex flex-col gap-4 m-4'>
                <Text className='indent-4'>
                    Hello! I&apos;m Nicholas Evans, a passionate Software
                    Engineer with four years of experience in the dynamic world
                    of web development. My journey into programming began at the
                    age of 10 when I started creating private servers for games.
                    Over the years, I&apos;ve evolved into a full-stack web
                    developer, harnessing the power of TypeScript for both
                    frontend and backend development.
                </Text>
                <Text className='indent-4'>
                    In my professional journey, I&apos;ve had the opportunity to
                    work on exciting projects, including a full-stack template
                    that seamlessly integrates API calls into the state
                    management system. This not only enhances efficiency but
                    also ensures type-safe code shared between the frontend and
                    backend. Currently, I&apos;m immersed in the development of
                    a website dedicated to facilitating item trading among
                    players in the game Median XL. Leveraging PostgreSQL and
                    Next.js, this project showcases my commitment to robust and
                    innovative solutions.
                </Text>
                <Text className='indent-4'>
                    When faced with challenges, I tackle them head-on by
                    applying known solutions. If needed, I consult with
                    experienced colleagues or dive into documentation. Google,
                    Stack Overflow, and engaging with software engineering
                    communities on platforms like Discord are valuable resources
                    in my troubleshooting toolkit.
                </Text>
                <Text className='indent-4'>
                    My skill set extends beyond technical expertise.
                    Adaptability, communication, dependability, leadership,
                    active listening, teamwork, problem-solving, and critical
                    thinking are integral parts of my professional arsenal. I
                    find joy in the collaborative nature of software
                    engineering, thriving in team environments where diverse
                    skills contribute to collective success.
                </Text>
                <Text className='indent-4'>
                    While I&apos;m currently deeply engaged in what I love,
                    I&apos;m driven to continuously expand my knowledge. My
                    future endeavors involve exploring various design patterns,
                    tech stacks, and delving into the exciting realm of machine
                    learning. I aim to be a versatile resource, contributing to
                    and learning from the ever-evolving landscape of software
                    engineering.
                </Text>
                <Text className='indent-4'>
                    Let&apos;s connect and explore the possibilities of creating
                    innovative solutions together!
                </Text>
            </section>
            <div className='flex justify-center'>
                <Button
                    onClick={() => {
                        store.windows.add('contact_me');
                        store.windows.unhide('contact_me');
                    }}
                >
                    Contact Me
                </Button>
            </div>
        </AppWindow>
    );
};

export default AboutMe;
