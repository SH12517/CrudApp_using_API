import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apidata, setApiData] = useState([])
  
  function getData(){
  axios.get('https://64f36ec6edfa0459f6c69656.mockapi.io/crud').then((response)=>{
      setApiData(response.data);
    }).catch((err)=>{
      console.log(err)
  })
  }
  function handledelete(id){
            axios.delete(`https://64f36ec6edfa0459f6c69656.mockapi.io/crud/${id}`)
            .then(()=>{
              getData();
            }).catch((err)=>{
              console.log(err)
          })
  }
  function setDataToStorage(id, name, age, email){
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('age', age)
    localStorage.setItem('email', email)
  }
  useEffect(()=>{
    getData();
  },[])
 
    return (
    <>
      <div className="row">
        <div className="col-md-12">
        <div className="mb-3 mt-3">
            <Link  to='/create'><button className="btn btn-primary">Create New Data</button></Link>
        </div>
          <table className="table table-bordered table-striped table-hover table-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>Email</th>
                <th>Edit</th>
                <th >Delete</th>
              </tr>
            </thead>
            <tbody>
             {apidata.map((item)=>{
                return(
                   <tr>
                     <td>{item.id}</td>
                     <td>{item.e_name}</td>
                     <td>{item.e_age}</td>
                     <td>{item.e_email}</td>
                     <td>
                     <Link to='/edit'> <button className="btn btn-primary" 
                     onClick={()=> setDataToStorage(item.id, item.e_name , 
                     item.e_age,item.e_email)}> Edit</button></Link></td>
                     <td> <button className="btn btn-danger" onClick={()=>
                     {if(window.confirm('Are You Sure to this Delete Data ??')){handledelete(item.id)}}}>Delete</button> </td>
                     </tr>
                )

             })
             }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Read;
