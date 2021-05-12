import React from 'react';

export default function Input({onChange, value, name, id}){
	const handleChange = e => {
    onChange((e.target.value));
  };
	return(
		<div>
				<input 
					type="text" 
					name={name} 
					id={id}
					onChange={handleChange}
      		value={value}
					autocomplete="given-name" 
					className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				/>
		</div>
	)
}