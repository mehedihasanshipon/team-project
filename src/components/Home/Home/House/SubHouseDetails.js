import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import fakehouse from '../FakeData';

const SubHouseDetails = () => {
    const {cardId} = useParams();
    console.log("useParams", cardId)
    const certainProduct = fakehouse?.find(datum => datum.id == cardId)
    console.log(certainProduct);
    // useEffect(()=> {
        
    // },[])
    return (
        <div className="pt-5 mt-5">
          
            <h1>This is service details page</h1>
            <h4>{certainProduct.id}</h4>
            <h5>{certainProduct.apartmentInfo}</h5>
        </div>
    );
};

export default SubHouseDetails;