import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div class="flex justify-center items-center">
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span class="visually-hidden"></span>
            </div>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;