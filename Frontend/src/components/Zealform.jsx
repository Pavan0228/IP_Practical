import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Zealform = () => {
    const [productData, setProductData] = useState({
        eventName: "",
        eventDate: "",
        eventTime: "",
        location: ""

    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const accessToken = JSON.parse(localStorage.getItem("accessToken"));

        console.log(accessToken)

        try {
            const response = await axios.post(
                "http://localhost:3000/api/zeal/addEvent",
                productData,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            alert("Product added successfully!");
            navigate("/getallproducts");
        } catch (error) {
            console.error("Error adding product:", error);
            alert(error.response?.data?.message || "Failed to add product");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Add a New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">EventName</label>
                    <input
                        type="text"
                        name="eventName"
                        value={productData.eventName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="eventDate"
                        value={productData.eventDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                        type="number"
                        name="eventTime"
                        value={productData.eventTime}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Category</label>
                    <input
                        type="text"
                    name="location"
                        value={productData.location}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>


                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default Zealform;
