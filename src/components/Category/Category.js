import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const Category = () => {
    const details = useLoaderData();
    const [selectedCar, setSelectedCar] = useState(null);

    return (
        <div>
            {
                details.map(detail =>
                    <div
                        key={detail._id}
                        className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        <div className="rounded overflow-hidden shadow-lg">
                            <img className="w-full" src={detail.picture} alt="Mountain" />
                            <h2 className='text-2xl px-3 py-2'> {detail.name}</h2>
                            <h2 className='px-3 py-1'>Location: {detail.location}</h2>
                            <h2 className='text-primary px-3 py-1'>Price: ${detail.resale_price}</h2>
                            <h2 className='px-3 py-1'>Original Price: ${detail.original_price}</h2>
                            <h2 className='px-3 py-1'>Years of use: {detail.years_of_use} years</h2>
                            <h2 className='px-3 py-1 pb-5'>Posted on: {detail.posted_time}</h2>
                            <div>
                                <label
                                    onClick={() => setSelectedCar(detail)}
                                    htmlFor="booking-modal"
                                    className="btn btn-primary text-white mx-3 my-1 mb-5">Book Now</label>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                selectedCar &&
                <BookingModal
                    selectedCar={selectedCar}
                    setSelectedCar={setSelectedCar}>
                </BookingModal>}
        </div>
    );
};

export default Category;