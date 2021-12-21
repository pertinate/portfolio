const path = requires('path');

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [
            path.join(__dirname, 'src/styles')
        ]
    }
};
