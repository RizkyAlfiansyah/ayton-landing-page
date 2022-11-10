import styled from '@emotion/styled';
import { Box, TextField } from '@mui/material'
import { white } from '@mui/material'
import React from 'react'

const BaseInput = ({ type, name, placeholder, value, onChange, className, required = false }) => {

    return (
        <div className={`${className} floating-label-group`}>
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
        </div>
    )
}

export default BaseInput