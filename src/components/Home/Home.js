import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <img className='' src="https://i.ibb.co/9cR8Ryv/2.jpg" alt="car-banner" />

            <div>
                <h2 className='text-4xl font-bold text-center mb-2'>Advertised Items</h2>

            </div>

            <div>
                <h2 className='text-4xl font-bold text-center mb-2'>Used Cars</h2>
                {
                    categories.map(category =>
                        <div key={category._id} className="card w-96 bg-base-100 shadow-2xl border cards mx-auto">
                            <div className="card-body flex flex-row gap-x-5">
                                <div>
                                    <h2 className="card-title">{category.category_id}.</h2>
                                </div>

                                <div>
                                    <h2 className="card-title">{category.name}</h2>
                                </div>
                            </div>
                            <Link className='px-10 pb-5' to={`/category/${category.category_id}`}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    )
                }
            </div>

            <div className='bg-cupcake p-5'>
                <div className='py-5'>
                    <h2 className='text-4xl font-bold text-center mb-2'>Our Values</h2>
                    <h5 className='text-2xl text-center mb-3'>We believe buying a car should be fun, easy, and affordable. Here is how we are leading the revolution</h5>
                </div>

                <div className='cards grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
                    <div className="card w-96 bg-base-100 shadow-2xl border">
                        <div className="card-body">
                            <h2 className="card-title">Price</h2>
                            <h2 className='font-bold text-2xl'>No haggling. No pressure.</h2>
                            <p>We have eliminated the middleman and made the entire car buying process more efficient, which allows us to pass the savings on to our customers.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-2xl border">
                        <div className="card-body">
                            <h2 className="card-title">Reconditioning</h2>
                            <h2 className='font-bold text-2xl'>Multiple Inspections</h2>
                            <p>Our cars are inspected for safety, mechanical and cosmetic issues. We only sell cars that have accident-free CARFAX vehicle history reports at the time of purchase and sale.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-2xl border">
                        <div className="card-body">
                            <h2 className="card-title">Finance</h2>
                            <h2 className='font-bold text-2xl'>Get a Competitive Rate</h2>
                            <p>We have strategic relationships with partners like Chase, Santander, and Ally to secure the best financing for you.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-2xl border">
                        <div className="card-body">
                            <h2 className="card-title">Deliver to you</h2>
                            <h2 className='font-bold text-2xl'>Delivery Straight to You</h2>
                            <p>Delivering cars is at the heart of what we do. Save a trip to the dealership and let us bring your next car to you.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-2xl border">
                        <div className="card-body">
                            <h2 className="card-title">7-day returns</h2>
                            <h2 className='font-bold text-2xl'>7 Days to Decide</h2>
                            <p>Spend a week (or 250 miles) getting to know your vehicle. Take a trip, park it in your garage, drive it to work. If it is not right, we will take it back.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-2xl border">
                        <div className="card-body">
                            <h2 className="card-title">Coverage</h2>
                            <h2 className='font-bold text-2xl'>Free Limited Warranty</h2>
                            <p>A limited warranty is included with all our vehicles, good for 90 days or 6,000 miles. Additional coverage options available for added peace of mind.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;