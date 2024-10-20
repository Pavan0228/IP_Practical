// src/pages/Hotels.jsx
import React, { useState, useEffect } from "react";
import HotelForm from "../components/HotelForm";
import HotelList from "../components/HotelList";
import axios from "axios";

const Hotels = () => {
    const [hotels, setHotels] = useState([]);

    const fetchHotels = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/hotels", {
                withCredentials: true,
            });
            setHotels(response.data.hotels);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    useEffect(() => {
        fetchHotels();
    }, []);

    const handleHotelAdded = (newHotel) => {
        setHotels((prev) => [...prev, newHotel]);
    };

    return (
        <div>
            <h1 className="text-2xl mb-4">Manage Hotels</h1>
            <HotelForm onHotelAdded={handleHotelAdded} />
            <HotelList hotels={hotels} />
        </div>
    );
};

export default Hotels;
