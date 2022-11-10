import React from 'react'

const BaseInput = ({ type, name, placeholder, value, onChange, className, required = false, errorMessage = '' }) => {

    return (
        <div className={`${className} flex-flex-col gap-4 floating-label-group`}>
            <input
                type={type}
                id={name}
                name={name}
                // placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={`w-full py-4 bg-transparent focus:ring-0 focus:outline-none border-b-1 border-white border-opacity-40 text-16 leading-19 font-normal text-white placeholder-white`}
                autofocus
                required
                autoComplete='off'
            />
            <label className="floating-label">{placeholder}</label>
            {
                errorMessage && (
                    <p className='w-full text-start text-red-500 text-12 leading-4 mt-1'>
                        {"*name cannot be empty"}
                    </p>
                )
            }
        </div>
    )
}

export default BaseInput