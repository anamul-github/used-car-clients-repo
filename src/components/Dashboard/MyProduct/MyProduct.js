import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const MyProduct = () => {
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json()
            return data;
        }
    })

    const handleDelete = (product) => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.success("Deleted Successfully");
                }
                console.log(data);
                refetch();
            });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>location</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Marketing</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => {
                                return <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.name}</td>
                                    <td>Available</td>
                                    <td>{product.location}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td><button className='btn btn-xs btn-success'>Advertise</button></td>
                                    <td><button onClick={() => handleDelete(product)} className='btn btn-xs btn-warning'>Delete</button></td>
                                    <ToastContainer />
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;