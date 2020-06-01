import { lazy } from 'react';

// Import all those components that needs to be shown in navbar.
// These components are loaded dynamically.
const Home = lazy(() => import('./components/Home/Home'))
const Blogs = lazy(() => import('./components/Blogs/Blogs'));
const SignIn = lazy(() => import('./components/SignIn/SignIn'));
const BlogPage = lazy(() => import('./components/Blogs/BlogPage/BlogPage'));

const publicRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/blogs',
        component: Blogs,
        exact: true,
        name: 'Blogs'
    },
    {
        path: '/signin',
        component: SignIn,
        exact: true
    },
    {
        path: '/blogs/:url',
        component: BlogPage,
        exact: true
    }
];

const privateRoutes = [];

export default { public: [...publicRoutes], private: [...privateRoutes] };