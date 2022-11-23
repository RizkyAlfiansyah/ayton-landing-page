import React from 'react'

const Input = ({ type, name, placeholder, value, onChange, className }) => {

    if (type === 'textarea') {
        return (
            <textarea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${className} py-4 bg-transparent focus:ring-0 focus:outline-none border-b-1 border-white border-opacity-40 text-16 leading-19 font-normal text-white placeholder-white resize-none`}
            />
        )
    } else {
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
}

export default Input