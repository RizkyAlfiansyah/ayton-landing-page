import { InputBase } from '@mui/material'
import { BaseInput, Input, InputUpload } from 'components/atoms'
import { RadioInput } from 'components/molecules'
import React, { useState } from 'react'

const SignupSection = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        company_name: '',
        company_website: '',
        number_of_employees: '',
        isRevenue: true,
        isProfitable: true,
        capital: '',
        funds: '',
        description: '',
        files: []
    })

    return (
        <div className='w-full min-h-full bg-black bg-opacity-70 xl:px-80 flex flex-col lg:gap-24 gap-16 xl:py-32 md:px-36 px-5 py-14'>
            <p className='w-full lg:text-56 lg:leading-68 text-40 leading-48 font-bold text-white xl:px-32 text-center'>
                Register for a free business review and consultation
            </p>
            <div className='w-full flex flex-col justify-start items-center lg:gap-12 gap-10 font-inter lg:px-5'>
                <div className='w-full flex lg:flex-row flex-col justify-between items-center gap-8'>
                    <BaseInput
                        type='text'
                        name='name'
                        placeholder='Your Full Name'
                        className='lg:w-3/12 w-full'
                        required
                    />
                    <BaseInput
                        type='email'
                        name='email'
                        placeholder='Email'
                        className='lg:w-9/12 w-full'
                        required
                    />
                </div>
                <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-8'>
                    <BaseInput
                        type='text'
                        name='company'
                        placeholder='Company Name'
                        className='lg:w-4/12 w-full'
                        required
                    />
                    <BaseInput
                        type='text'
                        name='website'
                        placeholder='Company Website'
                        className='lg:w-4/12 w-full'
                        required
                    />
                    <BaseInput
                        type='text'
                        name='employees'
                        placeholder='Number of team members'
                        className='lg:w-4/12 w-full'
                        required
                    />
                </div>
                <div className='w-full flex lg:flex-row flex-col justify-start lg:items-center items-start lg:gap-14 gap-10'>
                    <RadioInput
                        title='Is your business generating revenue'
                        validation={values.isRevenue}
                        onClickYes={() => setValues({ ...values, isRevenue: true })}
                        onClickNo={() => setValues({ ...values, isRevenue: false })}
                    />
                    <RadioInput
                        title='Is your business profitable'
                        validation={values.isProfitable}
                        onClickYes={() => setValues({ ...values, isProfitable: true })}
                        onClickNo={() => setValues({ ...values, isProfitable: false })}
                    />
                </div>
                <BaseInput
                    type='number'
                    name='capital'
                    placeholder='How much capital are you looking to raise'
                    className='w-full'
                    required
                />
                <BaseInput
                    type='text'
                    name='description'
                    placeholder='Briefly describe your business, how do you make money'
                    className='w-full md:py-0 py-6'
                    required
                />
                <div className='w-full flex flex-col justify-start items-start gap-4 lg:mt-4'>
                    <p className='font-normal text-16 leading-19 text-white'>
                        Upload your company presentation <span className='text-white text-opacity-60'>(.pdf.docx.ppt)</span>
                    </p>
                    <InputUpload
                        onChange={
                            (e) => {
                                console.log(e)
                            }
                        }
                        id='file'
                    >
                        <p className='text-white'>
                            + Upload File
                        </p>
                    </InputUpload>
                </div>
                <button className='w-full py-4 px-6 text-center bg-white rounded-lg font-bold text-18 leading-19 font-inter lg:mt-0 mt-6'>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default SignupSection