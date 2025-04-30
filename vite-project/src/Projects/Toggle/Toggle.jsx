import React, { useState } from 'react';
import './Toggle.css';
import { IoIosSwitch } from "react-icons/io";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <>
    <h1 >Toggle Switch < IoIosSwitch style={{color:"#f44336",textAlign:"center"}} /></h1>

    <div className="toggle-switch " onClick={handleToggleSwitch}>
      <div className={`switch ${isOn ? 'on' : 'off'}`}>{isOn ? 'ON' : 'OFF'}</div>
    </div>
    </>
  );
};

export default Toggle;
