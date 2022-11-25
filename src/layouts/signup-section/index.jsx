import { BaseInput, Input, InputUpload } from 'components/atoms'
import { RadioInput } from 'components/molecules'
import React, { useState } from 'react'
import SuccessSVG from 'assets/icons/icon-success.png'
import TwitterGraySVG from 'assets/icons/icon-twitter-gray.svg'
import LinkedInGraySVG from 'assets/icons/icon-linkedin-gray.svg'
import FileSVG from 'assets/icons/file.svg'
import CloseGraySVG from 'assets/icons/icon-close-gray.svg'
import Image from 'next/image'
import { axiosApiInstance } from 'helpers/axios'

const SignupSection = () => {

    const [isSuccess, setIsSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [fileName, setFileName] = useState("")

    const [values, setValues] = useState({
        full_name: '',
        phone_number: '',
        email: '',
        email_confirmaion: '',
        company_name: '',
        company_website: '',
        number_of_employees: '',
        is_generate_revenue: 1,
        is_profitable: 1,
        capital_raised: '',
        business_description: '',
        file: []
    })

    const _handleSubmit = () => {
        setError([]);
        const payload = new FormData();
        payload.append('full_name', values.full_name);
        payload.append('phone', values.phone_number);
        payload.append('email', values.email);
        payload.append('email_confirmation', values.email_confirmaion);
        payload.append('company_name', values.company_name);
        payload.append('company_website', values.company_website);
        payload.append('number_of_employees', values.number_of_employees);
        payload.append('is_generate_revenue', values.is_generate_revenue);
        payload.append('is_profitable', values.is_profitable);
        payload.append('capital_raised', values.capital_raised);
        payload.append('business_description', values.business_description);
        payload.append('file', values.file[0] ? values.file[0] : "");
        setLoading(true);

        try {
            axiosApiInstance.post('/signups', payload)
                .then((res) => {
                    setLoading(false);
                    setIsSuccess(true);
                })
                .catch((err) => {
                    setError(err.response?.data?.message);
                    setLoading(false);
                });
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div className='w-full flex flex-col justify-center items-center lg:gap-24 gap-16 xl:py-32 md:px-2 lg:px-0 px-5 py-14'>
            <p className='w-full xl:text-56 xl:leading-68 md:text-40 md:leading-48 text-24 leading-32 font-bold text-center font-caslon tracking-wide'>
                Register for a free business review and <br className='md:flex hidden' /> fundraising consultation
            </p>
            {
                isSuccess ? (
                    <>
                        <div className='lg:w-6/12 md:w-10/12 flex flex-col justify-center items-center bg-primary-800 rounded-3xl lg:px-20 lg:py-16 lg:gap-10 gap-4 p-6 md:p-12'>
                            <div>
                                <Image
                                    src={SuccessSVG}
                                    alt='success'
                                />
                            </div>
                            <div className='w-full flex flex-col justify-start items-center gap-8'>
                                <p className='w-full text-center font-bold md:text-32 md:leading-38 text-24 leading-26'>
                                    Your submission has been succesfully processed
                                </p>
                                <p className='w-full text-center font-bold md:text-16 md:leading-19 text-primary-180'>
                                    We will contact you within 3-5 working days
                                </p>
                            </div>
                            <div className='w-full flex flex-col justify-start items-center gap-3'>
                                <p className='w-full text-center font-bold text-sm text-primary-100'>
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
                    <div className='w-full flex flex-col justify-start items-center lg:gap-12 gap-10 font-inter xl:px-80 lg:px-48 md:px-32'>
                        <BaseInput
                            type='text'
                            name='name'
                            placeholder='Your Full Name*'
                            className='w-full'
                            required
                            value={values.full_name}
                            onChange={(e) => setValues({ ...values, full_name: e.target.value })}
                            errorMessage={error?.full_name}
                        />
                        <div className='w-full flex lg:flex-row flex-col justify-between items-center gap-8'>
                            <BaseInput
                                optional
                                type='number'
                                name='phone_number'
                                placeholder='Phone Number'
                                className='lg:w-4/12 w-full'
                                required
                                value={values.phone_number}
                                onChange={(e) => setValues({ ...values, phone_number: e.target.value })}
                                errorMessage={error?.phone_number}
                            />
                            <BaseInput
                                type='text'
                                name='email'
                                placeholder='Email*'
                                className='lg:w-4/12 w-full'
                                required
                                value={values.email}
                                onChange={(e) => setValues({ ...values, email: e.target.value })}
                                errorMessage={error?.email}
                            />
                            <BaseInput
                                type='text'
                                name='email_confirmation'
                                placeholder='Confirm your email*'
                                className='lg:w-4/12 w-full'
                                required
                                value={values.email_confirmaion}
                                onChange={(e) => setValues({ ...values, email_confirmaion: e.target.value })}
                                errorMessage={error?.email_confirmation}
                            />
                        </div>
                        <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-8'>
                            <BaseInput
                                type='text'
                                name='company'
                                placeholder='Company Name*'
                                className='lg:w-4/12 w-full'
                                required
                                value={values.company_name}
                                onChange={(e) => setValues({ ...values, company_name: e.target.value })}
                                errorMessage={error?.company_name}
                            />
                            <BaseInput
                                type='text'
                                name='website'
                                placeholder='Company Website*'
                                className='lg:w-4/12 w-full'
                                required
                                value={values.company_website}
                                onChange={(e) => setValues({ ...values, company_website: e.target.value })}
                                errorMessage={error?.company_website}
                            />
                            <BaseInput
                                type='number'
                                name='employees'
                                placeholder='Number of team members*'
                                className='lg:w-4/12 w-full'
                                required
                                value={values.number_of_employees}
                                onChange={(e) => setValues({ ...values, number_of_employees: e.target.value })}
                                errorMessage={error?.number_of_employees}
                            />
                        </div>
                        <div className='w-full flex lg:flex-row flex-col justify-start lg:items-center items-start lg:gap-14 gap-10'>
                            <RadioInput
                                title='Is your business generating revenue'
                                validation={values.is_generate_revenue}
                                onClickYes={() => setValues({ ...values, is_generate_revenue: 1 })}
                                onClickNo={() => setValues({ ...values, is_generate_revenue: 0 })}
                            />
                            <RadioInput
                                title='Is your business profitable'
                                validation={values.is_profitable}
                                onClickYes={() => setValues({ ...values, is_profitable: 1 })}
                                onClickNo={() => setValues({ ...values, is_profitable: 0 })}
                            />
                        </div>
                        <BaseInput
                            type='text'
                            name='capital'
                            placeholder='How much capital are you looking to raise*'
                            className='w-full'
                            required
                            value={values.capital_raised}
                            onChange={(e) => setValues({ ...values, capital_raised: e.target.value })}
                            errorMessage={error?.capital_raised}
                        />
                        <BaseInput
                            type='textarea'
                            name='business_description'
                            placeholder='Briefly describe your business, how do you make money*'
                            className='w-full md:py-0 py-6'
                            required
                            value={values.business_description}
                            onChange={(e) => setValues({ ...values, business_description: e.target.value })}
                            errorMessage={error?.business_description}
                        />
                        <div className='w-full flex flex-col justify-start items-start gap-4 lg:mt-4'>
                            <p className='font-normal text-16 leading-19 text-black'>
                                Upload your company presentation <span className='text-black text-opacity-60'>(.pdf.docx.ppt) - optional</span>
                            </p>
                            {
                                values.file.length === 0 ? (
                                    <InputUpload
                                        onChange={
                                            (e) => {
                                                setValues({ ...values, file: e.target.files })
                                            }
                                        }
                                        id='file'
                                        errorMessage={error?.file}
                                    >
                                        <p className='text-black'>
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
                                        <p className='underline'>
                                            {values.file[0].name}
                                        </p>
                                        <div
                                            className='cursor-pointer'
                                            onClick={() => {
                                                setValues({
                                                    ...values,
                                                    file: [],
                                                })
                                                setFileName('')
                                            }
                                            }>
                                            <Image
                                                src={CloseGraySVG}
                                                alt='close'
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            {
                                error?.file && (
                                    <p className='w-full text-start text-red-500 text-12 leading-4 mt-1'>
                                        {error?.file}
                                    </p>
                                )
                            }
                        </div>
                        <button className={`${loading && "disabled:bg-opacity-40"} w-full py-4 px-6 text-center bg-black text-white rounded-lg font-bold text-18 leading-19 font-inter lg:mt-0 mt-6`}
                            onClick={_handleSubmit}
                            disabled={loading}
                        >
                            {
                                loading ? (
                                    <div className='flex gap-2 justify-center items-center'>
                                        <p>Submitting...</p>
                                        <div className="border-t-transparent w-6 h-6 border-[3px] border-black border-solid rounded-full animate-spin"></div>
                                    </div>
                                ) : (
                                    <p>Submit</p>
                                )
                            }
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default SignupSection