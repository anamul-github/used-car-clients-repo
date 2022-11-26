import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Category = () => {
    const details = useLoaderData();
    console.log(details);


    return (
        <div classNameName='mx-auto'>
            {
                details.map(detail =>
                    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        <div className="rounded overflow-hidden shadow-lg">
                            <img className="w-full" src={detail.picture} alt="Mountain" />
                            <h2 className='text-2xl px-3 py-2'> {detail.name}</h2>
                            <h2 className='px-3 py-1'>Location: {detail.location}</h2>
                            <h2 className='text-primary px-3 py-1'>Price: ${detail.resale_price}</h2>
                            <h2 className='px-3 py-1'>Original Price: ${detail.original_price}</h2>
                            <h2 className='px-3 py-1'>Years of use: {detail.years_of_use} years</h2>
                            <h2 className='px-3 py-1 pb-5'>Posted on: {detail.posted_time}</h2>
                        </div>
                    </div>
                )
            }

        </div>

        //key={detail._id}>{detail.name}
    );
};

export default Category;