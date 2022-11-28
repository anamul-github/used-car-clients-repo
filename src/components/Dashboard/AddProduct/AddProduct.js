import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
    const options = [
        {
            id: "1",
            name: "Excellent",
        },
        {
            id: "2",
            name: "Old",
        },
        {
            id: "3",
            name: "Fair",
        },
    ];

    const categories = [
        {
            id: "1",
            name: "Regular",
        },
        {
            id: "2",
            name: "Luxury",
        },
        {
            id: "3",
            name: "Electric",
        },
    ];

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const category = form.category.value;
        const usingTime = form.usingTime.value;
        const description = form.description.value;

        const addProduct = {
            name: name,
            price: price,
            condition: condition,
            phone: phone,
            location: location,
            category: category,
            usingTime: usingTime,
            description: description,
        };
        console.log(addProduct);

        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    console.log(data);
                    form.reset();
                    toast.success("Your product is added, click to my product and see");
                }
            });
    };

    return (
        <div>
            <h1 className="text-4xl font-bold text-white-700 mt-5">
                Add Your Product
            </h1>
            <form onSubmit={handleAddProduct} className="my-6">
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="Car Name"
                    className="input input-bordered input-accent w-full max-w-xs mt-4"
                />
                <br />
                <input
                    required
                    type="text"
                    name="price"
                    placeholder="Car Price"
                    className="input input-bordered input-accent w-full max-w-xs mt-4"
                />
                <br />
                <select
                    name="condition"
                    className="select select-bordered w-full max-w-xs mt-4"
                >
                    <option disabled selected>
                        Condition
                    </option>
                    {options.map((option) => {
                        return <option key={option.id}>{option.name}</option>;
                    })}
                </select>
                <br />
                <input
                    required
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    className="input input-bordered input-accent w-full max-w-xs mt-4"
                />
                <br />
                <input
                    required
                    type="text"
                    name="location"
                    placeholder="Your Location"
                    className="input input-bordered input-accent w-full max-w-xs mt-4"
                />
                <br />
                <select
                    name="category"
                    className="select select-bordered w-full max-w-xs mt-4"
                >
                    <option disabled selected>
                        Choose Category
                    </option>
                    {categories.map((category) => {
                        return <option key={category.id}>{category.name}</option>;
                    })}
                </select>
                <br />
                <input
                    required
                    type="text"
                    name="usingTime"
                    placeholder="Years of use"
                    className="input input-bordered input-accent w-full max-w-xs mt-4"
                />
                <br />
                <textarea
                    name="description"
                    className="textarea textarea-bordered mt-4 max-w-xs w-full"
                    placeholder="Description"
                ></textarea>
                <br />
                <input
                    type="submit"
                    value="submit"
                    className="btn btn-active btn-accent mt-4"
                />
                <ToastContainer></ToastContainer>
            </form>
        </div>
    );
};

export default AddProduct;