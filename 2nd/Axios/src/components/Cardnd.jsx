import React from 'react'

const Cardnd = ({movieData}) => {
  const {Title,Year,Runtime,Poster}=movieData;

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        padding: "20px",
        width: "300px",
        backgroundColor: "#fff",
        transition: "transform 0.3s",
      }}>
        <div>
          <img
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              marginBottom: "15px",
              display:"flex"
            }}
            src={Poster}
            alt={Title}
          />
        </div>
    
        <div style={{ textAlign: "center" }}>
          <h2 style={{ margin: "10px 0", fontSize: "20px", color: "#333" }}>🎬 {Title}</h2>
          <p style={{ margin: "6px 0", fontSize: "16px", color: "#555" }}>📅 Year: {Year}</p>
          <p style={{ margin: "6px 0", fontSize: "16px", color: "#555" }}>⏱ Runtime: {Runtime}</p>
        </div>
      </div>
    </div>
  )
}

export default Cardnd
