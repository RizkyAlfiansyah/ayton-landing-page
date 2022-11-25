import React from 'react'

const SecondSection = () => {

    const secondSectionData = [
        {
            id: "£5M+",
            ids: "Raised",
            description: "We’ve raised over £5M in equity capital for UK based start-ups",
        },
        {
            id: "Early",
            ids: "Stage",
            description: "We work on fundraises from Seed stage to Series A",
        },
        {
            id: "Sector",
            ids: "Agnostic",
            description: "We work with start-ups across all major industries",
        },
        {
            id: "6-9",
            ids: "Months",
            description: "It takes on average 6-9 months to complete a Seed stage fundraise",
        },

    ]

    return (
        <>
            <div className='w-full flex flex-col lg:flex-row lg:justify-start justify-center lg:items-start items-center lg:gap-8 gap-12'>
                {
                    secondSectionData.map((data, index) => {
                        return (
                            <div className='w-full flex flex-col gap-8 justify-center items-center' key={index}>
                                <p className='w-full text-center text-primary-600 lg:text-40 lg:leading-56 md:text-38 md:leading-48 text-24 leading-32 font-bold'>{data.id} <br /> {data.ids}</p>
                                <p className='xl:w-64 lg:w-56 md:w-96 w-60 text-center font-normal lg:text-20 lg:leading-36 text-primary-100 md:px-0 lg:px-0'>{data.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SecondSection