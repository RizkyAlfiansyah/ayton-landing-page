import React from 'react'
import IconPNG from "assets/icons/icon.png"
import LogoPNG from "assets/icons/logo.png"
import Image from 'next/image'

const Navbar = ({ onClick }) => {

    const navbarLinks = [
        "Home",
        "Register",
        "Contact Us",
    ]

    return (
        <>
            <div className="hidden lg:flex w-full absolute top-0 justify-between items-center py-10 px-32 bg-transparent">
                <div>
                    <Image src={LogoPNG} alt="logo" />
                </div>
                <ul className="flex justify-start items-center gap-14">
                    {
                        navbarLinks.map((link, index) => {
                            return (
                                <li key={index} className="text-22 leading-27 text-white font-normal cursor-pointer rounded-xl" onClick={() => onClick(link)}>
                                    {link}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="lg:hidden w-full absolute flex top-0 justify-between items-center py-5 px-6 bg-transparent">
                <div>
                    <Image src={IconPNG} alt="logo-sm" />
                </div>
                <div className='flex flex-col justify-center items-center p-[2px] gap-[6px]'>
                    <div className='w-6 h-[2px] bg-white rounded-lg' />
                    <div className='w-6 h-[2px] bg-white rounded-lg' />
                    <div className='w-6 h-[2px] bg-white rounded-lg' />
                </div>
                {/* <ul className="flex justify-start items-center gap-14">
                {
                    navbarLinks.map((link, index) => {
                        return (
                            <li key={index} className="text-22 leading-27 text-white font-normal cursor-pointer rounded-xl" onClick={() => onClick(link)}>
                                {link}
                            </li>
                        )
                    })
                }
            </ul> */}
            </div>
        </>
    )
}

export default Navbar