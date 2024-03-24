/** @type {import('next').NextConfig} */
const nextConfig = {
    // optimizeFonts: false,
    images: {
        minimumCacheTTL: 86400,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: [

            'www.datocms-assets.com',

        ],
        imageSizes: [16, 24, 32, 48, 64, 96, 120, 128, 150, 240, 256, 300],
        deviceSizes: [
            375, 480, 600, 640, 750, 768, 828, 860, 1025, 1080, 1180, 1200, 1440,
            1920, 2000, 2048, 2880, 3840,
        ],
        formats: ['image/avif', 'image/webp'],
    },
    // reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
    // async headers() {
    //     return [
    //         {
    //             // Apply these headers to all routes in your application.
    //             source: '/(.*)',
    //             headers: [
    //                 {
    //                     key: 'Content-Security-Policy',
    //                     value: contentSecurityPolicy,
    //                 },
    //                 {
    //                     key: 'Cache-Control',
    //                     value: 's-maxage=900',
    //                 },
    //             ],
    //         },
    //         {
    //             // Don't cache sitemap
    //             source: '/sitemap.xml',
    //             headers: [
    //                 {
    //                     key: 'Cache-Control',
    //                     value: 'no-store',
    //                 },
    //             ],
    //         },
    //     ];
    // },
    // async redirects() {
    //     return redirects;
    // },
    // i18n: {
    //     // com will give the default locale & language for the market
    //     locales: ['com'],
    //     defaultLocale: 'com',
    //     localeDetection: false,
    // },
    // productionBrowserSourceMaps: true,
    // distDir: '_next',
    // experimental: {}, // https://github.com/nrwl/nx/issues/16845#issuecomment-1539989969
}

module.exports = nextConfig
