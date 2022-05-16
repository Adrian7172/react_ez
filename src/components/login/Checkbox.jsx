import React, { useState } from "react";
import "../scss/checkbox.scss"

const Checkbox = () => {

  const [isChecked, setChecked] = useState(false);
  return (
    <>
    <label className="main">
        <input
        className="main__input"
          type="checkbox"
          onClick={() => {
            setChecked(!isChecked);
          }}
        />
        <svg
        className={`main__checkbox ${isChecked ? "main__checkbox--active" : ""} `}
        aria-hidden="true"
        viewBox="0 0 11 13"
        fill="none"
        
        >
        <path 
        d="M1 5.1L5 10L15 0.1"
        strokeWidth="2"
        stroke={isChecked ? "#1c9cd9" : "none"}
        
        />

        </svg>
        <p>I read and agree Terms and Conditions</p>
        
        </label>
    </>
  );
};

export default Checkbox;
