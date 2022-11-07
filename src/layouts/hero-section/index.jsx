import React from 'react'
import Image from "next/image";
import { Navbar } from "layouts";
import LogoPNG from "assets/icons/icon-md.png";

const Hero = ({ onClick }) => {
    return (
        <>
            <Navbar onClick={onClick} />
            <p className="text-64 leading-78 text-center font-medium xl:px-56 text-white py-28">
                We help innovative entrepreneurs raise money for start-ups
            </p>
            <div>
                <Image src={LogoPNG} alt="logo" />
            </div>
        </>
    )
}

export default Hero