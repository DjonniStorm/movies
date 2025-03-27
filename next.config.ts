import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            // это для загрузки картинок
            {
                protocol: 'https',
                hostname: '**',
            },
            // это (лишнее) для картинок с api
            {
                protocol: 'https',
                hostname: 'image.openmoviedb.com',
            },
        ],
    },
};

export default nextConfig;
