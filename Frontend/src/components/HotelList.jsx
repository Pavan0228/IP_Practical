// src/components/HotelList.jsx
import React from "react";

const HotelList = ({ hotels }) => {
    return (
        <div className="space-y-4">
            {hotels.map((hotel) => (
                <div key={hotel._id} className="p-4 border border-gray-300 rounded">
                    <h2 className="font-bold">{hotel.name}</h2>
                    <p>Location: {hotel.location}</p>
                    <p>Price: ${hotel.price}</p>
                </div>
            ))}
        </div>
    );
};

export default HotelList;
