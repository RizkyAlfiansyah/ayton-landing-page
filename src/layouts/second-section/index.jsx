import React from 'react'

const SecondSection = () => {

    const secondSectionData = [
        {
            id: "£5M+",
            ids: "Raised",
            description: "We’ve raised over £5M in equity capital for UK based",
            desc: "start-ups"
        },
        {
            id: "Early",
            ids: "Stage",
            description: "We work on fundraises from Seed stage to",
            desc: "Series A"
        },
        {
            id: "Sector",
            ids: "Agnostic",
            description: "We work with start-ups across all major",
            desc: "industries"
        },
        {
            id: "6-9",
            ids: "Months",
            description: "It takes on average 6-9 months to complete a Seed",
            desc: "stage fundraise"
        },

    ]

    return (
        <>
            <div className='w-full flex flex-col lg:flex-row lg:justify-start justify-center lg:items-start items-center xl:gap-8 lg:gap-4 gap-12'>
                {
                    secondSectionData.map((data, index) => {
                        return (
                            <div className='w-full flex flex-col md:gap-8 gap-6 justify-center items-center' key={index}>
                                <p className='w-full text-center text-primary-600 xl:text-40 xl:leading-56 md:text-38 md:leading-48 text-32 leading-38 font-normal'>{data.id} <br /> {data.ids}</p>
                                <p className='xl:w-64 lg:w-full w-48 text-center font-normal xl:text-20 xl:leading-36 text-18 leading-27 text-primary-100 md:px-0 lg:px-0'>{data.description} <br /> {data.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SecondSection