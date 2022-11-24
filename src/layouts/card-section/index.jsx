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
        <div className='w-full h-full bg-black bg-opacity-60 flex flex-col justify-start items-center xl:px-24 md:px-16 px-4 lg:py-[115px] py-14 gap-[87px]'>
            <p className='2xl:w-8/12 w-full text-white text-center lg:text-56 lg:leading-68 text-40 leading-48 font-bold 2xl:px-32 xl:px-28 lg:px-16'>
                Let us help you secure early-stage <br /> investment capital
            </p>
            <div className='flex lg:flex-row flex-col justify-center items-center gap-5'>
                {
                    data.map((item, index) => (
                        <div className='2xl:w-3/12 lg:w-full md:w-4/6 lg:h-474 flex flex-col justify-start items-center md:gap-8 gap-4 py-8 lg:px-4 md:px-6 px-2 bg-white' key={index}>
                            <div>
                                <Image
                                    src={LogoBlackPNG}
                                    alt="logo-black"
                                />
                            </div>
                            <p className='text-center md:text-38 md:leading-36 text-24 leading-32 font-bold'>
                                {item.title}
                            </p>
                            <p className='md:text-20 md:leading-26 text-18 leading-22 text-center font-normal'>
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