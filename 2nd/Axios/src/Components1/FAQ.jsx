import React from 'react';

export const FAQ = ({ isactive, onToggle, el }) => {
  const { question, answer } = el;

  return (
    <li>
      <div>
        <p>{question}</p>
        <button onClick={onToggle} className={isactive ? 'active-btn' : ''}>
          {isactive ? 'Close' : 'Show'}
        </button>
      </div>
      {isactive && <p>{answer}</p>}
    </li>
  );
};
