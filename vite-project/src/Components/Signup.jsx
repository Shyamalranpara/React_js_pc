import React, { useState } from 'react';

const Signup = () => {

  const [users, setUsers] = useState({

    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: ""

  });

  const HandleSubmit = (e) => {

    e.preventDefault();
    const formData = { ...users }; 
    console.log(formData);
    console.log(users);

  };

  const handleChange = (e) => {

    const { name, value } = e.target;
    setUsers((prev) => ({ ...prev, [name]: value }));
    
  };

  return (
    <div style={{ backgroundColor: 'GrayText', padding: '20px' }}>
      <form onSubmit={HandleSubmit}>
        <input type="text" placeholder="Enter firstname" name="firstname" required onChange={handleChange} /><br />
        <input type="text" placeholder="Enter lastname" name="lastname" required onChange={handleChange} /><br />
        <input type="email" placeholder="Enter email" name="email" required onChange={handleChange} /><br />
        <input type="password" placeholder="Enter password" name="password" required onChange={handleChange} /><br />
        <input type="tel" placeholder="Enter phone number" name="phonenumber" required onChange={handleChange} /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
