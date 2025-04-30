import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmpCreate = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isActive, setIsActive] = useState(true);
  const[validation,setvalidation]=useState(false)

  const app = "http://localhost:3000/employee";
  const navigate = useNavigate();

  const hSubmit = (e) => {
    e.preventDefault();
  
    const data = { name, email, phone, isActive };

    const app = "http://localhost:3000/employee";
  
    fetch(app, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        alert("Data Added Successfully");
        navigate("/"); // correctly placed inside .then
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  

  return (
    <form className='container mt-4' onSubmit={hSubmit}>
      <div className='card p-4 shadow'>
        
        <div className='card-title'>
          <h2 className='text-center'>Create Employee</h2>
        </div>
      
        <div className='row'>
      <div className='col-lg-12'>
        <div className='form-group'>
          <label>Id</label>
          <input
          name='id'
            placeholder='Enter Id'
            type="text"
            className='form-control'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
      </div>
    </div>



    <div className='row'>
      <div className='col-lg-12'>
        <div className='form-group'>
          <label>Name</label>
          <input
            name='name'
            type="text"
            className='form-control'
            value={name}
            onMouseDown={() => setvalidation(true)}
            onChange={(e) => setName(e.target.value)}
          />

         {name.length==0 && validation && <span className='text-danger'>Enter The Name</span> } 

        </div>
      </div>
    </div>

    <br />
    <div className='row'>
      <div className='col-lg-12'>
        <div className='form-group'>
          <label>Email</label>
          <input
            placeholder='Enter Email'
            name='email'
            type="text"
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
    </div>

    
    <div className='row'>
      <div className='col-lg-12'>
        <div className='form-group'>
          <label>Phone</label>
          <input
            placeholder='Enter Phone'
            name='phone'
            type="text"
            className='form-control'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}

          />
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='col-lg-12'>
       
        <div className='form-chack'>
          <input
          checked={isActive}
          className='form-check-input'
            type="checkbox"
            value={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            />
            <label className='form-check-lable'>Is Active</label>
        </div>
      </div>
    </div>

        <br />

        <div className='form-group d-flex justify-content-center align-items-center gap-3'>
  <button className='btn btn-success'>Save</button>
  <Link to="/" className='btn btn-danger'>Back</Link>
</div>



      </div>
    </form>
  );
};

export default EmpCreate;
