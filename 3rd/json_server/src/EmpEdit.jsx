import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const EmpEdit = () => {
  const { empid } = useParams(); 
  // const [emData, setEmData] = useState({}); 
  const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isActive, setIsActive] = useState(true);
  const[validation,setvalidation]=useState(false)

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/employee/${empid}`);
      const emp = res.data;
      setId(emp.id);
      setName(emp.name);
      setEmail(emp.email);
      setPhone(emp.phone);
      setIsActive(emp.isActive);
    } catch (err) {
      console.error('Error fetching data:', err.message);
    }
  };
  
  const hSubmit = (e) => {
    e.preventDefault();
  
    const data = { id, name, email, phone, isActive };
  
    fetch(`http://localhost:3000/employee/${empid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        alert("Data Updated Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  
  useEffect(() => {
    getData();
  }, [empid]);
  
  return (
    <div>
       <form className='container mt-4' onSubmit={hSubmit}>
      <div className='card p-4 shadow'>
        
        <div className='card-title'>
        <h2 className='text-center'>Edit Employee</h2>

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
  disabled
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

    <div className='form-check'> 
  <input
    checked={isActive}
    className='form-check-input'
    type="checkbox"
    onChange={(e) => setIsActive(e.target.checked)}
  />
  <label className='form-check-label'>Is Active</label> 
</div>


        <br />

        <div className='form-group d-flex justify-content-center align-items-center gap-3'>
  <button className='btn btn-success'>Save</button>
  <Link to="/" className='btn btn-danger'>Back</Link>
</div>



      </div>
    </form>
    </div>
  )
}

export default EmpEdit
