import React from 'react'

const RadioInput = ({ title, data, onClickYes, onClickNo, validation }) => {
    return (
        <div className='flex flex-col justify-start items-start gap-4'>
            <p className='font-normal text-16 leading-19 text-white'>
                {title}
            </p>
            <div className='flex justify-start items-center gap-2'>
                <div className='w-4 h-4 rounded-full border-2 border-white cursor-pointer flex justify-center items-center hover:shadow-md'
                    onClick={onClickYes}
                >
                    {validation && <div className='w-2 h-2 rounded-full bg-primary-500' />}
                </div>
                <p
                    className='font-normal text-16 leading-19 text-white'
                >
                    Yes
                </p>
                <div className='w-4 h-4 rounded-full border-2 border-white cursor-pointer flex justify-center items-center hover:shadow-md ml-5'
                    onClick={onClickNo}
                >
                    {!validation && <div className='w-2 h-2 rounded-full bg-primary-500' />}
                </div>
                <p
                    className='font-normal text-16 leading-19 text-white'
                >
                    No
                </p>
            </div>
        </div>
    )
}

export default RadioInput