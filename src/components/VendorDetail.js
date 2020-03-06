import React from 'react';
import FoodListing from './FoodListing';
import Map from './Map';

const VendorDetail = () => {
    return (
        <>
            <img src="" alt="restaurant Image" />
            <h1>Restaurant 1</h1>
            <p>123 Happy Street, New York, NY</p>
            <p>(123)456-7890</p>
            <p>This is the placeholder description for restaurant1.</p>
            <Map />
            <FoodListing />
        </>
    );
};

export default VendorDetail;