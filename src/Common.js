import React from 'react';
//import {Switch} from 'react-router-dom';
import web from '../src/images/1.jpg';
import {NavLink} from 'react-router-dom';


const Common = (props) =>{
    return(
        <>
         <section id="header" className="d-flex align-item-center ">
         <div className="Container-flud nav_bg">
            <div className="row">
                
                <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-md-1 d-flex justify-content-center flex-column">
                    <h1>
                      {props.name} <strong className="brand-name">Technical</strong> 
            </h1>
          <h2 className="my-3">
              We are the team of talented developer making web..
               </h2>
               <div className="mt-3">
         <NavLink to={props.visit} className="btn-get-started">{props.btname } </NavLink>
                </div>
                </div>
            
              
              <div className="col-md-6 order-1 order-md-2 header-img ">
                  <img src={props.imgsrc} className="img-flud animated " alt="home img" />

                  </div>
                  </div>
                  </div>
              </div>
             </div>
         </section>

        </>

    );
};
export default Common;