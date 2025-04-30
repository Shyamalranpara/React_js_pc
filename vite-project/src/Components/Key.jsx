import React from 'react';

const Key = () => {
  const data = ['Sub', 'Name', 'City'];

  console.log('List Data:', data); // Logging the data array

  return (
    <div>
      <h1>Keys</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Key;
