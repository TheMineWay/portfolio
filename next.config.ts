import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

if (!process.env.SITE_URL) {
    throw new Error('Missing required environment variable: SITE_URL');
}

const nextConfig = {
    env: {
        SITE_URL: process.env.SITE_URL,
    },
};

export default withNextIntl(nextConfig);
