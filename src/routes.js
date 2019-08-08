import { lazy } from 'react';

// Import all those components that needs to be shown in navbar.
// These components are loaded dynamically.
const Home = lazy(() => import('./components/Home/Home'))
const Blogs = lazy(() => import('./components/Blogs/Blogs'));

const publicRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
        name: 'Home'
    },
    {
        path: '/blogs',
        component: Blogs,
        exact: true,
        name: 'Blogs'
    }
];

const privateRoutes = [];

export default { public: [...publicRoutes], private: [...privateRoutes] };