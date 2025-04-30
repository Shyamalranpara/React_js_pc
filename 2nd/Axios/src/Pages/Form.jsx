import React, {  useEffect, useState } from 'react'
import { postData } from '../API/PostApi';

const Form = ({data,setData,updatePost,setupdatePost}) => {
const [addData,setAddData]=useState({
    title:"",
    body:"" })

    // update 

    useEffect(() => {
      if (updatePost && updatePost.id) {
        setAddData({
          title: updatePost.title || "",
          body: updatePost.body || ""
        });
      }
    }, [updatePost]);
    const handleInputChange = (e) => {
        const name = e.target.name; // Get the name attribute of the input
        const value = e.target.value; // Get the value of the input
      
        setAddData((prev) => {
          console.log(prev);
          return {
            ...prev,
            [name]: value, // Dynamically update the state based on the input name
          };
        });
      };
      
      const addPostData = async () => {
          try {
              const res = await postData(addData);
              console.log("res", res);
              
              if (res.status === 201) {
                  setData([...data, res.data]);
                  setAddData({ title: "", body: "" });
                }
            } catch (error) {
                console.error("Error posting data:", error);
            }
        };
        
        const handleFormSubmit=(e)=>{
            e.preventDefault();
            addPostData();
        }
        
  return (
    <div >
      <h1>Form</h1>
      <form onSubmit={handleFormSubmit}>
        <div>

        <label htmlFor="title"></label>
        <input type="text" autoComplete='off' id='title' name='title' placeholder='Add title' value={addData.title} onChange={handleInputChange}/>

        </div>

        <div>
            
            <label htmlFor="body"></label>
            <input type="text" autoComplete='off' id='body' name='body' placeholder='Add post' value={addData.body} onChange={handleInputChange}/>
    
            </div>

            <div>
                <button type='submit'>ADD</button>
            </div>
      </form>
    </div>
  )
}

export default Form
