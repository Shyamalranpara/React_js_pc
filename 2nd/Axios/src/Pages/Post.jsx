import React, { useEffect, useState } from 'react'
import { deletePost, getPost } from '../API/PostApi';
import "../App.css";
import Form from './Form';
const Post = () => {
const [data, setData] = useState([]);
const [updatePost,setupdatePost]=useState({})



    console.log(getPost());
    
     const getPostData=async()=>{
      const res = await getPost();
      console.log(res.data);
      setData(res.data);
     }

    useEffect(()=>{
    getPostData();
    },[])

    const handleDeletePost = async(id)=>{
        try{
            const res= await deletePost(id);
            console.log(res);
            if(res.status === 200){
                const newData = data.filter((e)=>{
                    return e.id !== id;
                })
                setData(newData);
            }
        }
        catch(err){
            console.log(err);
        }
    
    }

    const handleupdatePost = async(el)=>{
setupdatePost(el)
    }
  return (
  <div>
    <section className="section-post">
        <h1 style={{fontSize:"50px"}}>Crud With Axios</h1>

        <div>
        <Form 
        data={data} 
        setData={setData}
        updatePost={updatePost}
        setupdatePost={setupdatePost}
        />
    </div>

        <ul>
            {data.map((e)=>{
                const {id, title, body} = e;
                return(
                    <li key={id}>
                        <p>{id}</p>
                        <p>title:{title}</p>
                        <p>body:{body}</p>
                        <button onClick={()=>handleupdatePost(e)}>Edit</button>
                        <button onClick={()=>handleDeletePost(id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    </section>
  </div>
  )
}

export default Post
