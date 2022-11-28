import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `https://y-iota-three.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h2 className='mt-10 px-10 text-white text-2xl mx-5'>Orders</h2>
            {

                bookings?.map(booking =>
                    <div
                        key={booking._id}
                        className="px-10 py-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        <div className="rounded overflow-hidden shadow-lg">
                            {/* <img className="w-full" src={detail.picture} alt="Mountain" /> */}
                            <h2 className='text-2xl px-3 py-2'> {booking.carName}</h2>
                            <h2 className='px-3 py-1'> Price: {booking.price}</h2>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 border border-blue-700 rounded px-5 mx-3 my-3">
                                Pay
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyOrders;