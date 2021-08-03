import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
 //import React,{component} from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar'
import { Switch,Route } from "react-router-dom";
 



const Ap = () =>{
 
    return(
        
            <div>
                <Navbar/>

                <Switch> 
            <Route exact path ="/" component={Home} />
            <Route exact path ="/about" component={About} />
            <Route exact path ="/service" component={Service} />
           
            <Route exact path ="/contact" component={Contact} />
                  </Switch>
            </div>
     
    
        

    );
};
export default Ap;