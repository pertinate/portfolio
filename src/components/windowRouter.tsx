import dynamic from 'next/dynamic';
import { AboutMeIcon } from './windows/aboutMe';
import { ContactMeIcon } from './windows/contactMe';
import { ThisStackIcon } from './windows/thisStack';
import { CurrentProjectsIcon } from './windows/currentProjects';
import { CalculatorIcon } from './windows/apps/calculator';

const windows = [
    'about_me',
    'contact',
    'this_stack',
    'current_projects',
    'calculator',
] as const;

export type windowsKey = (typeof windows)[number];

const AboutMe = dynamic(() => import('./windows/aboutMe'), {
    ssr: false,
});

const ContactMe = dynamic(() => import('./windows/contactMe'), {
    ssr: false,
});

const ThisStack = dynamic(() => import('./windows/thisStack'), {
    ssr: false,
});

const CurrentProjects = dynamic(() => import('./windows/currentProjects'), {
    ssr: false,
});

const Calculator = dynamic(() => import('./windows/apps/calculator'), {
    ssr: false,
});

export const iconRouter = (window: windowsKey) => {
    if (window == 'about_me') {
        return <AboutMeIcon />;
    }

    if (window == 'contact') {
        return <ContactMeIcon />;
    }

    if (window == 'this_stack') {
        return <ThisStackIcon />;
    }

    if (window == 'current_projects') {
        return <CurrentProjectsIcon />;
    }

    if (window == 'calculator') {
        return <CalculatorIcon />;
    }

    return <>not found</>;
};

const windowRouter = (window: windowsKey) => {
    if (window == 'about_me') {
        return <AboutMe />;
    }

    if (window == 'contact') {
        return <ContactMe />;
    }

    if (window == 'this_stack') {
        return <ThisStack />;
    }

    if (window == 'current_projects') {
        return <CurrentProjects />;
    }

    if (window == 'calculator') {
        return <Calculator />;
    }

    return <>not found</>;
};

export default windowRouter;
