import dynamic from 'next/dynamic';
import { AboutMeIcon } from './windows/aboutMe';
import { ContactMeIcon } from './windows/contactMe';

const windows = ['about_me', 'contact'] as const;

export type windowsKey = (typeof windows)[number];

const AboutMe = dynamic(() => import('./windows/aboutMe'), {
    ssr: false,
});

const ContactMe = dynamic(() => import('./windows/contactMe'), {
    ssr: false,
});

export const iconRouter = (window: windowsKey) => {
    if (window == 'about_me') {
        return <AboutMeIcon />;
    }

    if (window == 'contact') {
        return <ContactMeIcon />;
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

    return <>not found</>;
};

export default windowRouter;
