import dynamic from 'next/dynamic';

const windows = ['about_me', 'contact_me'] as const;

export type windowsKey = (typeof windows)[number];

const AboutMe = dynamic(() => import('./windows/aboutMe'), {
    ssr: false,
});
const ContactMe = dynamic(() => import('./windows/contactMe'), {
    ssr: false,
});

const windowRouter = (window: windowsKey) => {
    if (window == 'about_me') {
        return <AboutMe />;
    }

    if (window == 'contact_me') {
        return <ContactMe />;
    }

    return <>not found</>;
};

export default windowRouter;
