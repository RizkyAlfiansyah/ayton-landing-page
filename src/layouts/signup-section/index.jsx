import { Input, InputUpload } from 'components/atoms'
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
        <div className='w-full min-h-full bg-black bg-opacity-70 xl:px-80 flex flex-col gap-24 xl:py-32'>
            <p className='w-full text-56 leading-68 font-bold text-white xl:px-32 text-center'>
                Register for a free business review and consultation
            </p>
            <div className='w-full flex flex-col justify-start items-center gap-12 font-inter px-5'>
                <div className='w-full flex justify-between items-center gap-8'>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        className='w-3/12'
                    />
                    <Input
                        type='email'
                        name='email'
                        placeholder='Email'
                        className='w-9/12'
                    />
                </div>
                <div className='w-full flex justify-between items-center gap-8'>
                    <Input
                        type='text'
                        name='company'
                        placeholder='Company Name'
                        className='w-4/12'
                    />
                    <Input
                        type='text'
                        name='website'
                        placeholder='Company Website'
                        className='w-4/12'
                    />
                    <Input
                        type='text'
                        name='employees'
                        placeholder='Number of Employees'
                        className='w-4/12'
                    />
                </div>
                <div className='w-full flex justify-start items-center gap-14'>
                    <RadioInput
                        title='Are you generating revenue'
                        validation={values.isRevenue}
                        onClickYes={() => setValues({ ...values, isRevenue: true })}
                        onClickNo={() => setValues({ ...values, isRevenue: false })}
                    />
                    <RadioInput
                        title='Are you profitable'
                        validation={values.isProfitable}
                        onClickYes={() => setValues({ ...values, isProfitable: true })}
                        onClickNo={() => setValues({ ...values, isProfitable: false })}
                    />
                </div>
                <Input
                    type='number'
                    name='capital'
                    placeholder='How much capital are you looking to raise'
                    className='w-full'
                />
                <Input
                    type='number'
                    name='funds'
                    placeholder='Use of funds '
                    className='w-full'
                />
                <Input
                    type='text'
                    name='description'
                    placeholder='Describe your business, how do you make money'
                    className='w-full'
                />
                <div className='w-full flex flex-col justify-start items-start gap-4 mt-4'>
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
                <button className='w-full py-4 px-6 text-center bg-white rounded-lg font-bold text-18 leading-19 font-inter'>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default SignupSection