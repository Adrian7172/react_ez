import React, { useState } from "react";
import "../scss/input.scss";
const Input = (props) => {
  const [focused, setFocused] = useState(false);

  const { id, onChange, errorMessage, title, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <>
      <form className="input">
        <label className="input__label">{title}</label>
        <input
          className="input__field"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        ></input>
        <span className="input__error">{errorMessage}</span>
      </form>
    </>
  );
};

export default Input;
