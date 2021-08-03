import React from 'react';
import Common from './Common';
//import {Switch} from 'react-router-dom';
import web from '../src/images/8.jpg'
 


const About = () =>{
    return(
        <> 
        <Common name="Welcome to About page"
        imgsrc={web}
        visit="/Contact"
     btname="Contact now"
        />

        </>

    );
};
export default About;