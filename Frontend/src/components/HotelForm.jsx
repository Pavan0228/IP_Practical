import React, { useState } from "react";
import axios from "axios";

const HotelForm = ({ onHotelAdded }) => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [rooms, setRooms] = useState(0);
    const [amenities, setAmenities] = useState("");
    const [pricePerNight, setPricePerNight] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newHotel = { name, location, rooms, amenities, pricePerNight };
            const response = await axios.post("http://localhost:3000/api/hotels", newHotel, {
                withCredentials: true,
            });
            onHotelAdded(response.data);
        } catch (error) {
            console.error(error.response?.data || "Error creating hotel");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Hotel Name"
                className="mb-2 p-2 border"
            />
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="mb-2 p-2 border"
            />
            <input
                type="number"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                placeholder="Number of Rooms"
                className="mb-2 p-2 border"
            />
            <input
                type="text"
                value={amenities}
                onChange={(e) => setAmenities(e.target.value)}
                placeholder="Amenities"
                className="mb-2 p-2 border"
            />
            <input
                type="number"
                value={pricePerNight}
                onChange={(e) => setPricePerNight(e.target.value)}
                placeholder="Price Per Night"
                className="mb-2 p-2 border"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white">
                Add Hotel
            </button>
        </form>
    );
};

export default HotelForm;
