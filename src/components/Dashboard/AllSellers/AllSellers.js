import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
    const options = [
        {
            id: "1",
            name: "excellent",
        },
        {
            id: "2",
            name: "old",
        },
        {
            id: "3",
            name: "fair",
        },
    ];

    const categories = [
        {
            id: "1",
            name: "yamaha",
        },
        {
            id: "2",
            name: "Gixer",
        },
        {
            id: "3",
            name: "Cruiser",
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
                    toast.success("Your product is added,click to my products and see");
                }
            });
    };

    return (
        <div>
            <h1 className="text-5xl font-bold text-amber-900 text-center">
                Add Your Product
            </h1>
            <form onSubmit={handleAddProduct} className="my-6">
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    className="input input-bordered input-accent w-full max-w-xs mt-4"
                />
                <br />
                <input
                    required
                    type="text"
                    name="price"
                    placeholder="Product Price"
                    className="input input-bordered input-accent w-full max-w-xs mt-4"
                />
                <br />
                <select
                    name="condition"
                    className="select select-bordered w-full max-w-xs mt-4"
                >
                    <option disabled selected>
                        Select Condition
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
                    placeholder="your number"
                    className="input input-bordered input-accent w-full max-w-xs mt-4"
                />
                <br />
                <input
                    required
                    type="text"
                    name="location"
                    placeholder="your location"
                    className="input input-bordered input-accent w-full max-w-xs mt-4"
                />
                <br />
                <select
                    name="category"
                    className="select select-bordered w-full max-w-xs mt-4"
                >
                    <option disabled selected>
                        Choose category
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
                    placeholder="years of use"
                    className="input input-bordered input-accent w-full max-w-xs mt-4"
                />
                <br />
                <textarea
                    name="description"
                    className="textarea textarea-bordered mt-4"
                    placeholder="descriptin"
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