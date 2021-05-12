import React from "react";
import Input from './Components/Input/index';
import Button from './Components/Button/index';
import './assets/css/tailwindui.css';
import { Controller, useForm } from "react-hook-form";
export default function Parent({value}) {
	const { register, control, handleSubmit, errors} = useForm();
    const onSubmit = data => {
			console.log(data);
		}
    return(
      <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
				  <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <Controller
              name="firstname"
              defaultValue={false}
              control={control}
              ref={register}
              rules={{ required: true }}
              render={props => <Input id="firstname" {...props} value={value}/>}
            />
            {errors.firstname && <span style={{color:'red'}}>This field is required</span>}
            <Controller
              name="lastname"
              defaultValue={false}
              control={control}
              ref={register}
              rules={{ required: true }}
              render={props => <Input id="lastname" {...props} value={value}/>}
            />
            {errors.lastname && <span style={{color:'red'}}>This field is required</span>}
            <Controller
              name="button"
              control={control}
              ref={register}
              render={props => <Button id="button" {...props} value={value}/>}
            />
          </form>
        </div>
      </div>
    )
}