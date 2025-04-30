import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const EmpListing = () => {
  const [emData, setEmData] = useState([]);
  const navigate = useNavigate();

  const loadEdit = (id) => {
    console.log(id);
    navigate("/employee/edit/" + id);

  }
  const loadDelete = (id) => {
    console.log(id);
    if(window.confirm("Are you sure you want to delete this record?")){
      fetch(`http://localhost:3000/employee/${id}`, {
        method: "DELETE"
      })
        .then((res) => {
          alert("removed Successfully");
          window.location.reload(f);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }
  const loadDeatil = (id) => {
    console.log(id);
    navigate("/employee/detail/" + id);

  }

  const app = "http://localhost:3000/employee";

  const getData = async () => {
    try {
      const res = await axios.get(app);
      console.log(res);
      setEmData(res.data);
    } catch (err) {
      console.error('Error fetching data:', err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

//   useEffect(() => {
//     fetch(app)
//       .then((res) => res.json())
//       .then((resp) => {
//         console.log(resp);
//         setEmData(resp);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);

  return (
    <div className="container mt-4">
    <h2 className="text-center mb-4">Employee Listing</h2>
  
    <div className="card">
      <div className="card-body d-flex justify-content-center">
        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
      </div>
    </div>
  
    <table className="table table-bordered table-striped mt-3">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th colSpan={3} className="text-center">Action</th>
        </tr>
      </thead>
  
      <tbody>
        {emData && emData.map((el) => (
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.email}</td>
            <td>{el.phone}</td>
            <td><a href="" onClick={()=>loadEdit(el.id)}><button className="btn btn-success">Edit</button></a></td>
      <td><a href="" onClick={()=>loadDelete(el.id)}><button className="btn btn-danger">Delete</button></a></td>
      <td><a href="" onClick={()=>loadDeatil(el.id)}><button className="btn btn-primary">Details</button></a></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default EmpListing;
