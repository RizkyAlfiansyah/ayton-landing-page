import React from 'react'
import LogoBlackPNG from 'assets/icons/logo-black.png'
import Image from 'next/image'

const index = () => {

    const data = [
        {
            title: "Knowledgeable",
            desc: "We understand what investors look for and will help you get your business investment ready"
        },
        {
            title: "Experienced",
            desc: "Our team comprises individuals with extensive capital markets and start- up experience"
        },
        {
            title: "Committed",
            desc: "We invest in all companies we successfully raise capital for demonstrating our long-term commitment to your vision"
        }
    ]

    return (
        <div className='w-full h-full bg-black bg-opacity-60 flex flex-col justify-start items-center xl:px-24 md:px-0 px-4 lg:py-[115px] py-14 gap-[87px]'>
            <p className='w-full text-white text-center xl:text-56 xl:leading-78 md:text-40 md:leading-48 text-24 leading-32 font-bold font-caslon tracking-wide'>
                Let us help you secure early-stage <br /> investment capital
            </p>
            <div className='flex lg:flex-row flex-col justify-center items-center gap-5 lg:px-4'>
                {
                    data.map((item, index) => (
                        <div className='2xl:w-3/12 lg:w-full md:w-4/6 lg:h-474 flex flex-col justify-start items-center md:gap-8 gap-4 md:py-14 py-8 md:px-6 px-2 bg-white' key={index}>
                            <div className='mb-4'>
                                <Image
                                    src={LogoBlackPNG}
                                    alt="logo-black"
                                />
                            </div>
                            <p className='text-center md:text-38 md:leading-36 text-24 leading-32 font-bold font-caslon tracking-wide text-primary-600'>
                                {item.title}
                            </p>
                            <p className='md:text-20 md:leading-36 text-18 leading-22 text-center font-normal text-primary-100'>
                                {item.desc}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default index