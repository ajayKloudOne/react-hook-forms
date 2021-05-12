import React from 'react'
import {  Controller, useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import Input from './Components/Input/index';

function Control() {
    const { control, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = data => {
        console.log(data);
      }; 
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstname"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <TextField {...field} />}
            
          />
          {errors.firstname && <span style={{color:'red'}}>This field is required</span>}
          <input type="submit" />
        </form>
      );
}

export default Control