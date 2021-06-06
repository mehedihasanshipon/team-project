import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import property from '../../../../image/apartment 1.png'
import property1 from '../../../../image/lessee 1.png'
import property2 from '../../../../image/affordable 1.png'

const Service = () => {
    const serviceData = [
        {
           img:property,
           title:"Wide Range of Toure",
           description:"With a robust selection of popular properties on hand, as well as leading properties from experts."
        },
        
        {
           img:property1,
           title:"100% Enjoyable Journey",
           description:"With a robust selection of popular properties on hand, as well as leading properties from experts."
        },
        {
           img:property2,
           title:"Customer Satisfaction",
           description:"With a robust selection of popular properties on hand, as well as leading properties from experts."
        },
  
     ]
    return (
        <Container id="service" className="text-center mb-5 mt-3 service-container">
        <p className="m-0 p-2">Services</p>
        <h3 style={{fontSize:"34px"}} className="m-0 p-0 mb-5">We're an agency tailored to all <br/> clients' needs that always delivers</h3>

        <Row>
            {serviceData.map((data,index)=><Col key={index} md={4} sm={6} xs={12} className="mb-5">
         <img style={{width:"90px"}} src={data.img} alt=""/>
         <div className="px-3">
            <h4>{data.title}</h4>
            <p>{data.description}</p>
         </div>
      </Col>)}
        </Row>
     </Container>
    );
};

export default Service;