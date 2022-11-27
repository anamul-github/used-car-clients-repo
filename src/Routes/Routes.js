import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Category from '../components/Category/Category';
import Dashboard from '../components/Dashboard/Dashboard';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import Main from '../layout/Main';
import PrivateRoute from './PrivateRoute';


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
                path: '/category/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`)
                },
                element: <PrivateRoute><Category></Category></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '*',
        element: <div>
            <h2 className='text-center bg-red-900 py-14 text-7xl font-bold'>This route is not found!!</h2>
            <img className='w-full' src="https://i.ibb.co/2Mt4nsw/the404.png" alt="" />
        </div>
    }
])
