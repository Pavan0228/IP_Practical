import React, { useState, useEffect } from "react";
import axios from "axios";
import HotelForm from "../components/HotelForm";
import HotelList from "../components/HotelList";

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    const [hotelName, sethotelName] = useState("");
    const [searchedHotels, setSearchedHotels] = useState([]); // Changed to an array
    const [hotelToUpdate, setHotelToUpdate] = useState({
        name: "",
        location: "",
        rooms: 0,
        amenities: "",
        pricePerNight: 0,
    });
    const [hotelId, setHotelId] = useState("");

    // Fetch all hotels
    const fetchHotels = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/hotels", {
                withCredentials: true,
            });
            setHotels(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    // Search hotel by Name
    const handleSearchHotel = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/hotels/search/${hotelName}`, {
                withCredentials: true,
            });
    
            // Check if there are hotels in the response
            if (response.data.length > 0) {
                setSearchedHotels(response.data); // Store all returned hotels
                setHotelId(response.data[0]._id); // Set hotelId for updating/deleting
                setHotelToUpdate({
                    name: response.data[0].name,
                    location: response.data[0].location,
                    rooms: response.data[0].rooms,
                    amenities: response.data[0].amenities.join(", "), // Join amenities into a string
                    pricePerNight: response.data[0].pricePerNight,
                });
            } else {
                setSearchedHotels([]); // Clear searched hotels if none found
                setHotelId(""); // Clear hotelId if no hotel found
            }
    
        } catch (error) {
            console.error(error.response.data);
        }
    };
    
    // Update hotel by ID
    const handleUpdateHotel = async () => {
        try {
            const response = await axios.put(
                `http://localhost:3000/api/hotels/${hotelId}`,
                hotelToUpdate,
                {
                    withCredentials: true,
                }
            );
            fetchHotels(); // Refresh the list after updating
            alert("Hotel updated successfully");
        } catch (error) {
            console.error(error.response.data);
        }
    };

    // Delete hotel by ID
    const handleDeleteHotel = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/hotels/${hotelId}`, {
                withCredentials: true,
            });
            fetchHotels(); // Refresh the list after deletion
            setSearchedHotels([]); // Clear searched hotels after deletion
            alert("Hotel deleted successfully");
        } catch (error) {
            console.error(error.response.data);
        }
    };

    useEffect(() => {
        fetchHotels();
    }, []);

    return (
        <div>
            <h1 className="text-2xl mb-4">Manage Hotels</h1>
            {/* Search Hotel by ID */}
            <div>
                <input
                    type="text"
                    value={hotelName}
                    onChange={(e) => sethotelName(e.target.value)}
                    placeholder="Enter Hotel ID"
                    className="border p-2 mb-4"
                />
                <button
                    onClick={handleSearchHotel}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Search Hotel
                </button>
            </div>

            {/* Display Searched Hotels */}
            {searchedHotels.length > 0 && (
                <div className="border p-4 mt-4">
                    <h3>Hotel Details:</h3>
                    {searchedHotels.map((hotel) => (
                        <div key={hotel._id} className="mb-4">
                            <p>ID: {hotel._id}</p>
                            <p>Name: {hotel.name}</p>
                            <p>Location: {hotel.location}</p>
                            <p>Rooms: {hotel.rooms}</p>
                            <p>Amenities: {hotel.amenities.join(", ")}</p>
                            <p>Price Per Night: {hotel.pricePerNight}</p>
                            {/* Button to set selected hotel for updating */}
                            <button
                                onClick={() => {
                                    setHotelId(hotel._id);
                                    setHotelToUpdate({
                                        name: hotel.name,
                                        location: hotel.location,
                                        rooms: hotel.rooms,
                                        amenities: hotel.amenities.join(", "),
                                        pricePerNight: hotel.pricePerNight,
                                    });
                                }}
                                className="bg-yellow-500 text-white p-1 rounded"
                            >
                                Update
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Update Hotel Form */}
            {hotelId && (
                <div>
                    <h3 className="text-lg mt-4">Update Hotel</h3>
                    <input
                        type="text"
                        value={hotelToUpdate.name}
                        onChange={(e) => setHotelToUpdate({ ...hotelToUpdate, name: e.target.value })}
                        placeholder="Name"
                        className="border p-2 mb-2"
                    />
                    <input
                        type="text"
                        value={hotelToUpdate.location}
                        onChange={(e) => setHotelToUpdate({ ...hotelToUpdate, location: e.target.value })}
                        placeholder="Location"
                        className="border p-2 mb-2"
                    />
                    <input
                        type="number"
                        value={hotelToUpdate.rooms}
                        onChange={(e) => setHotelToUpdate({ ...hotelToUpdate, rooms: parseInt(e.target.value) })}
                        placeholder="Rooms"
                        className="border p-2 mb-2"
                    />
                    <input
                        type="text"
                        value={hotelToUpdate.amenities}
                        onChange={(e) => setHotelToUpdate({ ...hotelToUpdate, amenities: e.target.value.split(", ") })}
                        placeholder="Amenities (comma separated)"
                        className="border p-2 mb-2"
                    />
                    <input
                        type="number"
                        value={hotelToUpdate.pricePerNight}
                        onChange={(e) => setHotelToUpdate({ ...hotelToUpdate, pricePerNight: parseFloat(e.target.value) })}
                        placeholder="Price Per Night"
                        className="border p-2 mb-2"
                    />
                    <button
                        onClick={handleUpdateHotel}
                        className="bg-green-500 text-white p-2 rounded mt-2"
                    >
                        Update Hotel
                    </button>
                </div>
            )}

            {/* Delete Hotel Button */}
            {hotelId && (
                <button
                    onClick={handleDeleteHotel}
                    className="bg-red-500 text-white p-2 rounded mt-4"
                >
                    Delete Hotel
                </button>
            )}

            {/* Create New Hotel Form */}
            <HotelForm onHotelAdded={(newHotel) => setHotels((prev) => [...prev, newHotel])} />

            {/* List of Hotels */}
            <HotelList hotels={hotels} />
        </div>
    );
};

export default Hotels;
