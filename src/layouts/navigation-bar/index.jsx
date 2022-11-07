import React from 'react'
import LogoSVG from "assets/icons/logo.svg"
import LogoPNG from "assets/icons/logo.png"
import Image from 'next/image'

const Navbar = ({ onClick }) => {

    const navbarLinks = [
        "Home",
        "Register",
        "Contact Us",
    ]

    return (
        <div className="w-full absolute flex top-0 justify-between items-center py-10 px-32 bg-transparent">
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
    )
}

export default Navbar