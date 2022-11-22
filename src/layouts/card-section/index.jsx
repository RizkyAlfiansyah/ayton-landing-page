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
        <div className='w-full h-full bg-black bg-opacity-60 flex flex-col justify-start items-center xl:px-[141px] md:px-16 px-6 py-[115px] gap-[87px]'>
            <p className='w-full text-white text-center text-56 leading-68 font-bold lg:px-32'>
                Let us help you secure early-stage investment capital
            </p>
            <div className='flex lg:flex-row flex-col justify-center items-center gap-5'>
                {
                    data.map((item, index) => (
                        <div className='lg:w-3/6 md:w-4/6 xl:h-474 flex flex-col justify-start items-center gap-10 py-14 px-6 bg-white cursor-pointer hover:bg-primary-700' key={index}>
                            <div>
                                <Image
                                    src={LogoBlackPNG}
                                    alt="logo-black"
                                />
                            </div>
                            <p className='text-center text-40 leading-56 font-bold'>
                                {item.title}
                            </p>
                            <p className='text-20 leading-36 text-center font-normal'>
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