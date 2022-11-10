import React from 'react'

const SecondSection = () => {

    const secondSectionData = [
        {
            id: "I",
            title: "Want to raise money for your start-up?",
            description: "Since 2017 we've raised over £5M in equity capital for UK based start-ups",
        },
        {
            id: "II",
            title: "Fundraising is lengthy and time consuming",
            description: "We are sector agnostic and focus on Pre-Seed to Series A financing rounds",
        },
        {
            id: "III",
            title: "Our experience will increase your chances of success",
            description: "We work with you to run entire fundraising process which typically lasts 6-9 months",
        },

    ]

    return (
        <>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-52'>
                {
                    secondSectionData.map((data, index) => {
                        return (
                            <div className='xl:w-1/3 lg:w-1/3 w-full flex flex-col justify-start items-center gap-8' key={index}>
                                <div className='w-full h-28 flex justify-center items-center'>
                                    <span className='text-72 leading-108 font-bold text-primary-100'>{data.id}</span>
                                </div>
                                <div className='w-full h-full xl:px-8 flex flex-col justify-start items-center gap-10'>
                                    <p className='md:w-5/12 lg:w-auto text-24 leading-38 font-normal text-center text-primary-100'>
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-8'>
                <p className='w-full font-bold lg:text-48 lg:leading-58 text-32 leading-38 text-center lg:px-24'>
                    {"Whether you're a first-time founder seeking seed capital or an established entrepreneur seeking growth capital we're here to help"}
                </p>
            </div>
        </>
    )
}

export default SecondSection