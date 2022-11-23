import React from 'react'
import Image from "next/image";
import { Navbar } from "layouts";
import LogoPNG from "assets/icons/icon-md.png";

const Hero = ({ onClick }) => {
    return (
        <>
            <Navbar onClick={onClick} />
            <p className="lg:text-64 lg:leading-78 text-38 leading-48 text-center font-medium p-5 lg:p-0 text-white">
                We focus on fundraising so you can focus on building your business
            </p>
        </>
    )
}

export default Hero