import React from 'react';
import './Houses.css'
import {Row} from "react-bootstrap"
import HouseDetails from './HouseDetails';
import fakehouse from '../FakeData';

const Houses = () => {
    return (
        <div>
            <div className='header'>
            <p>House Rent</p>
            <h1>Discover The Latest Rent <br /> Avalible Today</h1>
            </div>
            <Row>
                {
                    fakehouse.map((data,i)=><HouseDetails key={'house'+i} data={data}></HouseDetails>)
                }
            </Row>
        </div>
    );
};

export default Houses;