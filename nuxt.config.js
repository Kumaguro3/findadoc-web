const SITE_TITLE = 'Find a Doc, Japan!'
const SITE_DESCRIPTION =
    'Health service information for the international community in Japan'

export default {
    //typescript settings
    typescript: {
        shim: false
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: 'Health Services in Japan',
        title: SITE_TITLE,
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {
                name: 'google-site-verification',
                content: '-iHcqQwxR-wiZU6Y4BKtcn79tUZJAcyWXJt7w7iobpY'
            },
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: SITE_DESCRIPTION },
            { name: 'format-detection', content: 'telephone=no' },
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: 'summary'
            },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: SITE_TITLE
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: SITE_DESCRIPTION
            },
            {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: 'https://www.findadoc.jp/findadoc-social.png'
            },
            {
                hid: 'twitter:image:alt',
                name: 'twitter:image:alt',
                content: SITE_TITLE
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: SITE_TITLE
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: SITE_DESCRIPTION
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://www.findadoc.jp/findadoc-social.png'
            },
            {
                hid: 'og:image:secure_url',
                property: 'og:image:secure_url',
                content: 'https://www.findadoc.jp/findadoc-social.png'
            },
            {
                hid: 'og:image:alt',
                property: 'og:image:alt',
                content: SITE_TITLE
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://www.findadoc.jp'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/tailwind.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        }
    },
    target: 'static'
}
