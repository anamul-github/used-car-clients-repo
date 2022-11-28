import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Category from '../components/Category/Category';
import AddProduct from '../components/Dashboard/AddProduct/AddProduct';
import AllBuyers from '../components/Dashboard/AllBuyers/AllBuyers';

import AllSellers from '../components/Dashboard/AllSellers/AllSellers';
import MyOrders from '../components/Dashboard/MyOrders/MyOrders';
import MyProduct from '../components/Dashboard/MyProduct/MyProduct';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import SellerRoute from './SellerRoute';


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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

        ]
    },
    {
        path: '*',
        element: <div>
            <h2 className='text-center bg-red-900 py-14 text-7xl font-bold'>This route is not found!!</h2>
            <img className='w-full' src="https://i.ibb.co/2Mt4nsw/the404.png" alt="" />
        </div>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            }
        ]
    }
])
