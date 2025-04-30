import axios from 'axios'
import React from 'react'

  export const api = axios.create({
        baseURL:"https://jsonplaceholder.typicode.com",
    });

  
    /* instance */

export const getPost=()=>{
    return api.get("/posts")
}

// delete method 
export const deletePost=(id)=>{
  return api.delete(`/posts/${id}`)
}


export const postData=(post)=>{
  return api.post("/posts", post); // ✅ 
}

export const PostApi = () => {
  return (
    <div>
      <h1>Post API Component</h1>
    </div>
  );
};