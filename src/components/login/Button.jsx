import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/button.scss";
const Button = () => {
  return (
    <div>
      <NavLink to={"/chart"}>
        <button className="button">Create account</button>
      </NavLink>
    </div>
  );
};

export default Button;
