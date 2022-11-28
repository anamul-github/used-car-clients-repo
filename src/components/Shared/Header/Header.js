import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <nav className="bg-gray-800 py-4">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            {/* react icons */}
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">

                                    <Link to='/' className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</Link>

                                    <Link to='/blog' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>

                                    <Link to='/dashboard' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>

                                    {
                                        user?.uid ?
                                            <>
                                                <button variant="light" onClick={handleLogOut} className='mx-2'>Logout</button>
                                            </>
                                            :
                                            <>
                                                <Link to='/login' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                                                <Link to='/signup' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>

                                            </>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">

                        <Link to='/' className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</Link>

                        <Link to='/blog' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>

                        <Link to='/dashboard' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>

                        {
                            user?.uid ?
                                <>
                                    <button variant="light" onClick={handleLogOut} className=' text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Logout</button>
                                </>
                                :
                                <>
                                    <Link to='/login' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                                    <Link to='/signup' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
                                </>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;