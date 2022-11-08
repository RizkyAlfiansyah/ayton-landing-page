import React from 'react'

const SecondSection = () => {

    const secondSectionData = [
        {
            id: "I",
            title: "Want to raise money for your start-up?",
            description: "We are a venture firm for entrepreneurs with big visions and the tenacity and commitment and drive to follow through. We specialize in technology, lifestyle, enabled technology and web 3.0",
        },
        {
            id: "II",
            title: "Fundraising is lengthy and time consuming",
            description: "We invest from pre-seed right through to Series A and take an active role in helping to scale business operations",
        },
        {
            id: "III",
            title: "Our experience will increase your chances of success",
            description: "Our pre-seed commitment is typically £30K for 10% equity",
        },

    ]

    return (
        <>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-52'>
                {
                    secondSectionData.map((data, index) => {
                        return (
                            <div className='lg:w-1/3 w-full flex flex-col justify-start items-center gap-8' key={index}>
                                <div className='w-full h-28 flex justify-center items-center'>
                                    <span className='text-72 leading-108 font-bold text-primary-100'>{data.id}</span>
                                </div>
                                <div className='w-full h-full px-8 flex flex-col justify-start gap-10'>
                                    <p className='text-32 leading-32 font-bold text-center'>{data.title}</p>
                                    <p className='text-16 leading-26 font-normal text-center text-primary-100'>
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-8'>
                <p className='xl:w-[700px] lg:w-auto w-full font-bold text-48 leading-58 text-center'>
                    Are you ready to secure investment for your business?
                </p>
                <button className='py-5 px-20 text-white flex justify-center items-center font-semibold text-18 leading-22 font-inter bg-black rounded-10 hover:shadow-lg'>
                    Yes, Register
                </button>
            </div>
        </>
    )
}

export default SecondSection