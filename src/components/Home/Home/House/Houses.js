import React from 'react';
import './Houses.css'
import {Container, Row} from "react-bootstrap"
import HouseDetails from './HouseDetails';
import fakehouse from '../FakeData';

const Houses = () => {
    return (
        <Container>
            <div className='header container'>
            <p>House Rent</p>
            <h1>Discover The Latest Rent <br /> Avalible Today</h1>
            </div>
            <Row>
                {
                    fakehouse.map((data,i)=><HouseDetails key={'house'+i} data={data}></HouseDetails>)
                }
            </Row>
        </Container>
    );
};

export default Houses;