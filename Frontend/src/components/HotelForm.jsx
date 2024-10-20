// src/components/HotelForm.jsx
import React, { useState } from "react";
import axios from "axios";

const HotelForm = ({ onHotelAdded }) => {
    const [hotelData, setHotelData] = useState({
        name: "",
        location: "",
        price: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotelData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/hotels", hotelData, {
                withCredentials: true,
            });
            onHotelAdded(response.data.hotel);
            setHotelData({ name: "", location: "", price: "" });
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="name"
                placeholder="Hotel Name"
                value={hotelData.name}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
                required
            />
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={hotelData.location}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
                required
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                value={hotelData.price}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Add Hotel
            </button>
        </form>
    );
};

export default HotelForm;
