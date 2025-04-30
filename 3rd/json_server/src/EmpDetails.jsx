import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EmpDetails = () => {
  const { empid } = useParams(); 
  const [emData, setEmData] = useState({}); 

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/employee/${empid}`);
      setEmData(res.data); 
    } catch (err) {
      console.error('Error fetching data:', err.message);
    }
  };

  useEffect(() => {
    getData();
  }, [empid]);

  return (
    <div className="container mt-4">
      {emData ? (
        <div className="card p-3 shadow">

          <h2>Employee Details</h2>

          <p><strong>ID:</strong> {emData.id}</p>

          <p><strong>Name:</strong> {emData.name}</p>

          <p><strong>Email:</strong> {emData.email}</p>

          <p><strong>Phone:</strong> {emData.phone}</p>

          <Link to="/" className="btn btn-success">Back To Home</Link>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmpDetails;
