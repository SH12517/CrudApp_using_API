import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function Create() {
  const [name, setName] = useState();
   const [age, setAge] = useState();
    const [email, setEmail] = useState();
    
    
    const navigate= useNavigate();

    const handleSubmit = (e) =>{
      e.preventDefault();
      axios.post('https://64f36ec6edfa0459f6c69656.mockapi.io/crud',{
        e_name:name,
        e_age:age,
        e_email:email
      }).then(()=>{
        navigate('/')
      }).catch((err)=>{
        console.log(err)
    })
    }
  
  return (
    <div className="row ">
      <div className="col-md-4 bg-secondary p-4 mt-4"> 
<div className="mt-2 mb-4 text-center">
      <Link to='/'><button className="btn btn-primary ">See Data table</button></Link>
      </div>
      <h2 className="m-1  bg-primary p-4 text-center"> Create Data </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          
              <label>Enter Name : </label> <br /> <br />
              <input
                type="text"
                placeholder="Enter Your name "
                name="Name"
                className="form-control"
                onChange={(e) => setName (e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Age : </label> <br /> <br />
              <input type="number" placeholder="Age"  name = 'age' className="form-control"  onChange={(e) => setAge (e.target.value)} />
            </div>
            <div className="form-group">
              <label>Enter Email : </label> <br></br> <br />
              <input
                type="Email"
                name="email"
                placeholder="Enter Email Id "
                className="form-control"
                 onChange={(e) => setEmail(e.target.value)}
              />
            </div> <br/>
            <div className="form-group text-center  ">
            <input type="submit" value='Submit'  className="btn  btn-success"/>
            </div>
         
        </form>
       
      </div>
    </div>
  );
}

export default Create;
