import React from 'react'

const Input = ({ type, name, placeholder, value, onChange, className }) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`${className} py-4 bg-transparent focus:ring-0 focus:outline-none border-b-1 border-white border-opacity-40 text-16 leading-19 font-normal text-white placeholder-white`}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input