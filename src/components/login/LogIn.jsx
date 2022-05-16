import React, { useState } from "react";
import Input from "./Input";
import "../scss/logIn.scss";
import Checkbox from "./Checkbox";
import Button from "./Button";
const LogIn = () => {
  const [value, setValue] = useState({
    "email": "",
    "password": "",
    "confirmPassword": "",
    "fullName": "",
    "phoneNumber": "",
  });
  const data = [
    {
      id: 1,
      type: "email",
      title: "Your email address",
      errorMessage: "Please enter a valid email address!",
      name: "email",
      required: true,
    },
    {
      id: 2,
      type: "password",
      title: "Your password",
      errorMessage: "Should be 6-20 character and include at least 1 letter, 1 number and 1 special character.",
      name: "password",
      pattern:"^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$",
      required: true,
    },
    {
      id: 3,
      type: "password",
      title: "Confirm your password",
      errorMessage: "Password doesn't match!",
      name: "confirmPassword",
      pattern: value.password,
      required: true,
    },
    {
      id: 4,
      type: "text",
      title: "Your full name",
      errorMessage: "Name should be 5-20 character and shouldn't include any special character or number",
      name: "fullName",
      pattern:"^[a-zA-Z ]{5,20}$",
      required: true,
    },
    {
      id: 5,
      type: "tel",
      title: "Your phone number",
      errorMessage: "Please enter a valid phone number",
      name: "phoneNumber",
      pattern:"^[0-9]{10}$",
      required: true,
    },
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  console.log(value)

  return (
    <>
      <main className="login">
        <section className="login__left">
          <div className="login__left__content">
            <h3>Choose a date range</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea alias
              quod voluptest.
            </p>
          </div>
        </section>
        <section className="login__right">
          <form className="login__right__form" onSubmit={handleSubmit}>
            <h3>Create an account</h3>
            {data.map((ele) => {
              return (
                <Input
                  key={ele.id}
                  {...ele}
                  value={value[ele.name]}
                  onChange={onChange}
                />
              );
            })}
            <Checkbox />
            
            <Button />
          </form>
        </section>
      </main>
    </>
  );
};

export default LogIn;
