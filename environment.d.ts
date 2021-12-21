declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
        }
        interface Process {
            browser: boolean;
        }
    }
}

export { };
