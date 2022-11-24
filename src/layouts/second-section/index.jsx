import React from 'react'

const SecondSection = () => {

    const secondSectionData = [
        {
            id: "£5M+ Raised",
            description: "We’ve raised over £5M in equity capital for UK based start-ups",
        },
        {
            id: "Early Stage",
            description: "We work on fundraises from Seed stage to Series A",
        },
        {
            id: "Sector Agnostic",
            description: "We work with start-ups across all major industries",
        },
        {
            id: "6-9 Months",
            description: "It takes on average 6-9 months to complete a Seed stage fundraise",
        },

    ]

    return (
        <>
            <div className='w-full flex flex-col lg:flex-row justify-start lg:items-start items-center lg:gap-8 gap-12'>
                {
                    secondSectionData.map((data, index) => {
                        return (
                            <div className='lg:w-full w-9/12 flex flex-col justify-start items-center lg:gap-8 2xl:gap-12 gap-3' key={index}>
                                <p className='2xl:w-5/12 lg:w-6/12 lg:h-20 2xl:text-48 md:text-40 md:leading-48 text-32 leading-22 font-normal text-primary-600 text-center'>{data.id}</p>
                                <div className='w-full h-full xl:px-8 2xl:px-20 flex flex-col justify-start items-center gap-10'>
                                    <p className='md:w-10/12 lg:w-auto md:text-24 md:leading-32 text-20 leading-32 font-normal text-center text-primary-100'>
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SecondSection