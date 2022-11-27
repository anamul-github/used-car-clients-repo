import React, { useContext } from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const BookingModal = ({ selectedCar, setSelectedCar }) => {
    //selectedCar is just another name of detail(props drilling)
    const { name, resale_price } = selectedCar;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const carType = form.carType.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            userName: name,
            email,
            carName: carType,
            price,
            phone,
            location
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    setSelectedCar(null);
                    toast.success('Booking Confirmed')
                }

            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name='name' type="text" disabled value={user?.displayName ? user.displayName : 'New User'} className="input input-bordered w-full" />
                        <input name='email' type="email" disabled value={user?.email} className="input input-bordered w-full" />
                        <input name='carType' type="text" disabled value={name} className="input input-bordered w-full" />
                        <input name='price' type="text" disabled value={resale_price} className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Meeting Location" className="input input-bordered w-full" />

                        <input className="btn w-full" type='submit' value='submit' />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
