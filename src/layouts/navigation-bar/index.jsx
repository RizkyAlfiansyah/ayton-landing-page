import React, { useCallback, useEffect, useState } from 'react'
import IconPNG from "assets/images/single-logo.png"
import LogoPNG from "assets/icons/logo.png"
import CloseSVG from "assets/icons/icon-close.svg"
import Image from 'next/image'

const Navbar = ({ onClick }) => {
    const [collapse, setCollapse] = useState(false)// -> UP | DOWN | LEFT | RIGHT | null

    const navbarLinks = [
        "Fundraise",
        "About Us",
        "Contact Us",
    ]
    const changeBG = () => {
        console.log(window.scrollY)
    }

    const [clientWindowHeight, setClientWindowHeight] = useState("");

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={`hidden lg:flex w-full fixed top-0 justify-between items-center py-8 px-16 xl:px-32 ${clientWindowHeight < 700 ? "bg-transparent" : "bg-black"} z-50 scroll-auto`}>
                <div>
                    <Image src={LogoPNG} alt="logo" width={414} height={40} />
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
            <div className={`lg:hidden w-full fixed flex top-0 justify-between items-center py-2 px-6 ${clientWindowHeight < 670 ? "bg-transparent" : "bg-black bg-opacity-80"} z-50`}>
                <div>
                    {/* <Image src={IconPNG} alt="logo-sm" height={24} /> */}
                    <p className='font-source text-38 leading-56 text-white tracking-[.15em]'>AYTON</p>
                </div>
                <div className='flex flex-col justify-center items-center p-[2px] gap-[6px]' onClick={() => setCollapse(true)}>
                    <div className='w-6 h-[2px] bg-white rounded-lg' />
                    <div className='w-6 h-[2px] bg-white rounded-lg' />
                    <div className='w-6 h-[2px] bg-white rounded-lg' />
                </div>
            </div>
            {
                collapse && (
                    <div
                        className={`lg:hidden w-full fixed top-0 flex flex-col justify-start bg-primary-150 z-50`}>
                        <div className='w-full flex justify-between p-5'>
                            <div>
                                <Image src={IconPNG} alt="logo" />
                            </div>
                            <span className='font-bold text-white' onClick={() => setCollapse(false)}>
                                <Image src={CloseSVG} alt="close" />
                            </span>
                        </div>
                        <ul className="flex flex-col justify-start items-center">
                            {
                                navbarLinks.map((link, index) => {
                                    return (
                                        <li key={index}
                                            className="w-full text-22 leading-27 text-white font-normal cursor-pointer border-b-1 border-black px-5 py-3" onClick={() => onClick(link)}>
                                            {link}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </>
    )
}

export default Navbar