import React from "react";
import { useForm, Controller } from "react-hook-form";
import './App.css';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        name="name"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.name && <p>This field is required</p>}

      <label>Age</label>
      <input
        type="number" 
        name="age"
        ref={register({ required: 'invalid input', maxLength: {value: 2, message: 'exceeding value'} })}
      />
      {errors.age&& <p>{errors.age.message}</p>}

      <label>Email</label>
      <input 
      name="email"
      ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'enter valid email' })} 
      />
      {errors.email&& <p>enter valid email</p>}
      <input type="submit" />
    </form>
  );
}