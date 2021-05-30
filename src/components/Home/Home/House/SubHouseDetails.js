import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
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
        <Container>
            <div className="header container" style={{marginBottom: '20px'}}>
                <div>
                    <img src={certainProduct.img} alt="" style={{width: '60%', borderRadius: '5px'}} className="flui" />
                </div>
                
                <div>
                <h5 style={{textAlign: 'left'}}>Apartment Info.</h5>
                <p style={{textAlign: 'justify'}}>{certainProduct.apartmentInfo}</p>
                <h5 style={{textAlign:'left'}}>Price Details</h5>
                <p style={{textAlign: 'justify'}}>{certainProduct.priceDetails}</p>
                <h6 style={{textAlign: 'left'}}>Property Details</h6>
                <p style={{textAlign: 'justify'}}>{certainProduct.propertyDetails}</p>
                </div>
            </div>
        </Container>
    );
};

export default SubHouseDetails;