import React from 'react';
//import {Switch} from 'react-router-dom';
//import web from './images/4.jpg'
import Card from './Card';
import Sdata from './Sdata';


const Services = () =>{
    return(
        <>
        <div className="my-4">
        <h1 className="text-center"> Our Services</h1>
    </div>
    <div className="container-flud mb-5 nav_bj">
          <div className="row">

              <div className="col-10 mx-auto" >
                <div className="row">
                
                {
                    Sdata.map((val,ind) => {
                        return<Card key={ind} imgsrc={val.imgsrc} title={val.title}/>

                    })
                }


                </div>
              </div>
          </div>

    </div>
        </>

    );
};
export default Services;