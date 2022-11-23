import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Home from '../components/Home/Home';
import Main from '../layout/Main';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])
