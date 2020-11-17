import apiRoutes from './api-routes.json';

export default {
    appName: 'NextJS Demo',
    logo: '/images/logo.png',
    api: {
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
        routes: apiRoutes
    },
    alert: {
        types: [
            'default',
            'success',
            'error',
            'info',
            'warning'
        ]
    }
};
