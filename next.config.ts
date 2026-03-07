import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const SITE_URL = process.env.SITE_URL ?? 'http://localhost:3000';

const nextConfig = {
    env: {
        SITE_URL,
    },
};

export default withNextIntl(nextConfig);
