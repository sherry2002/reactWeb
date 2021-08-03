import React,{ useState } from 'react';
//import {Switch} from 'react-router-dom';
//import React,  from 'react';


const Contact = () =>{
  const [data, setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    textarea:"",

  });
 const InputEvent = (event)=>{
       const {name , value} = event.target;
      
       setData((preVal)=>{
         return{
            ...preVal,
            [name]:value,  
         }

       })
 };


const formSubmit =(e)=>{
  e.preventDefault();
  alert(
    `my name is ${data.fullname}.My mobile no is ${data.phone} and email is ${data.email},hare is what i want to say ${data.textarea}`
  );

};

    return(
        <>
        <div className="my-5">
            <h1 className="text-center">  Contact Us </h1>

        </div>
        <div className="conatiner contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto" >
                <form onSubmit={formSubmit}>
                  <div>
  <div className="mb-3">
    <label  >Full Name</label>
    <input type="text" className="form-control" id="Full Name" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your Name" required/>
  </div>
  <div className="mb-3">
    <label >Phone</label>
    <input type="number" className="form-control" id="phone" name="phone" value={data.phone} onChange={InputEvent} placeholder="mobile no" required/>
  </div>
  <div className="mb-3">
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" required/>
  </div>
  {/* <div className="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple className="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> */}
  <div className="mb-3">
    <label >Message</label>
    <textarea className="form-control" id="text" name="textarea" value={data.textarea} onChange={InputEvent} rows="4" required></textarea>
    </div>
    <div className="col-md-12 col-10 ">
       <button className="btn btn-outline-primary" type="submit">
         submit form
         </button>
    </div>
 </div>
</form>
                </div> 
            </div>

        </div>
        

        </>

    );
};
export default Contact;