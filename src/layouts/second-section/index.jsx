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
            id: "6-9 months",
            description: "It takes on average 6-9 months to complete a Seed stage fundraise",
        },

    ]

    return (
        <>
            <div className='w-full flex flex-col lg:flex-row justify-start lg:items-start items-center lg:gap-7 gap-9'>
                {
                    secondSectionData.map((data, index) => {
                        return (
                            <div className='lg:w-full w-8/12 flex flex-col justify-start items-center lg:gap-8 gap-2' key={index}>
                                <p className='w-full text-40 leading-56 font-bold text-primary-600 text-center tracking-tighter'>{data.id}</p>
                                <div className='w-full h-full xl:px-8 flex flex-col justify-start items-center gap-10'>
                                    <p className='md:w-5/12 lg:w-auto text-20 leading-36 font-normal text-center text-primary-100'>
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