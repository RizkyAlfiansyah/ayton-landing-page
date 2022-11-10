import { BaseInput, Input, InputUpload } from 'components/atoms'
import { RadioInput } from 'components/molecules'
import React, { useState } from 'react'
import SuccessSVG from 'assets/icons/icon-success.png'
import TwitterGraySVG from 'assets/icons/icon-twitter-gray.svg'
import LinkedInGraySVG from 'assets/icons/icon-linkedin-gray.svg'
import FileSVG from 'assets/icons/file.png'
import CloseGraySVG from 'assets/icons/icon-close-gray.svg'
import Image from 'next/image'

const SignupSection = () => {

    const [isSuccess, setIsSuccess] = useState(false)

    const [values, setValues] = useState({
        name: '',
        email: '',
        company_name: '',
        company_website: '',
        number_of_employees: '',
        isRevenue: true,
        isProfitable: true,
        capital: '',
        description: '',
        files: []
    })

    return (
        <div className='w-full min-h-full bg-black bg-opacity-70 xl:px-80 flex flex-col lg:gap-24 gap-16 xl:py-32 md:px-36 px-5 py-14'>
            <p className='w-full lg:text-56 lg:leading-68 text-40 leading-48 font-bold text-white xl:px-32 text-center'>
                Register for a free business review and consultation
            </p>
            {
                isSuccess ? (
                    <>
                        <div className='w-full h-full flex flex-col justify-center items-center bg-white rounded-3xl lg:px-56 lg:py-16 lg:gap-10 gap-4 p-6 md:p-12'>
                            <div>
                                <Image
                                    src={SuccessSVG}
                                    alt='success'
                                />
                            </div>
                            <div className='w-full flex-flex-col justify-start items-center'>
                                <p className='w-full text-center font-bold text-32 leading-38'>
                                    Your submission has been succesfully processed
                                </p>
                                <p className='w-full text-center font-bold text-16 leading-19 text-primary-180'>
                                    Your submission has been succesfully processed
                                </p>
                            </div>
                            <div className='w-full flex-flex-col justify-start items-center gap-3'>
                                <p className='w-full text-center font-bold text-sm'>
                                    Info@aytonventures.com
                                </p>
                                <div className='flex justify-center items-center gap-4'>
                                    <div>
                                        <Image
                                            src={TwitterGraySVG}
                                            alt='twitter'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src={LinkedInGraySVG}
                                            alt='linkedin'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div />
                    </>
                ) : (
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
                            {
                                values.files.length === 0 ? (
                                    <InputUpload
                                        onChange={
                                            (e) => {
                                                console.log(e)
                                                setValues({ ...values, files: e })
                                            }
                                        }
                                        id='file'
                                    >
                                        <p className='text-white'>
                                            + Upload File
                                        </p>
                                    </InputUpload>
                                ) : (
                                    <div className='w-full flex justify-start items-center gap-2'>
                                        <div>
                                            <Image
                                                src={FileSVG}
                                                alt='file'
                                            />
                                        </div>
                                        <p className='text-white underline'>
                                            {values.files[0].name}
                                        </p>
                                        <div
                                            className='cursor-pointer'
                                            onClick={() => setValues({
                                                ...values,
                                                files: [],
                                            })}>
                                            <Image
                                                src={CloseGraySVG}
                                                alt='close'
                                            />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <button className='w-full py-4 px-6 text-center bg-white rounded-lg font-bold text-18 leading-19 font-inter lg:mt-0 mt-6'>
                            Submit
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default SignupSection