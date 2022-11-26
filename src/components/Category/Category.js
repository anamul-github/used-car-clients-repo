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
                            <h2 className='text-2xl'> {detail.name}</h2>
                            <h2>Location: {detail.location}</h2>
                            <h2>Price: ${detail.resale_price}</h2>
                            <h2>Original Price: ${detail.original_price}</h2>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Mountain</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">

                            </div>
                        </div>
                    </div>
                )
            }

        </div>

        //key={detail._id}>{detail.name}
    );
};

export default Category;