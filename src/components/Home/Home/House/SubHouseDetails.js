import React from 'react';
import { useParams } from 'react-router';

const SubHouseDetails = () => {
    const {cardId} = useParams();
    // console.log("useParams", cardId)
    
    return (
        <div className="pt-5 mt-5">
            <h1>This is service details page</h1>
        </div>
    );
};

export default SubHouseDetails;