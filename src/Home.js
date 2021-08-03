import React from 'react';
//import {Switch} from 'react-router-dom';
import web from '../src/images/1.jpg';
import {NavLink} from 'react-router-dom';
import Common from './Common';


const Home = () =>{
    return(
        <>
       <Common name="Grow your bussines with"
        imgsrc={web}
        visit="/Service"
     btname="Get Started"/>
        </>

    );
};
export default Home;