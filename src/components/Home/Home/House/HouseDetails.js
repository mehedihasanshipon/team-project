import React from 'react';
import {  Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const HouseDetails = (props) => {
   const {img, title, bedroom, bathroom, price, location, id} = props.data;
   //  console.log(props)
   const history = useHistory();
   
   const handleBtn = (serviceId) => {
      history.push(`/details/${serviceId}`);
      const info ={
         img, 
         title,
         bedroom,
         bathroom, 
         price, 
         location, 
         id
      }
      console.log(info)
   }
    return (
        <Col md={4} sm={6} xs={12} className="mb-5">
        <img style={{width:"100%", borderRadius:"3px"}} src={img} alt=""/>
        <div className="mx-2">
           <h5 className="mt-3 mb-2" style={{fontWeight:"700"}}>{title}</h5>
           <p style={{fontWeight:"400", fontSize:"15px"}} className="m-0 p-0">{location}</p>
           <div >
              <span style={{fontWeight:"400", fontSize:"15px"}}>{bedroom} bedroom</span>
              <span style={{fontWeight:"400", fontSize:"15px"}} className="ml-4">{bathroom} bathroom</span>
              <div className="mt-3" style={{display:"flex", justifyContent:"space-between"}}>
                 <h2 className="house-price">${price}</h2>
                 <Button onClick={()=> {handleBtn(id)}} className="view-button my-1">View Details</Button>
              </div>
           </div>
           
        </div>
     </Col>
    );
};

export default HouseDetails;