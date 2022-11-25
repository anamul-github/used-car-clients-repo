import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const info = useLoaderData();

    return (
        <div>
            <h2>{info.name}</h2>

        </div>
    );
};

export default Category;