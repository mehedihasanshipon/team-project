
import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/actions/productsActions";
import Navbars from '../Navbars/Navbars';
import Header from './Header';
import Houses from './House/Houses';
import Service from './Service/Service';


const Home = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    
    // console.log(products)
    return (
        <div>
            <Navbars />
            <Header/>
            <Houses/>
            <Service/>
        </div>
    );
};

export default Home;