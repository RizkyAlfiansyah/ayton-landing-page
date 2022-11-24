import React from 'react'
import Image from "next/image";
import { Navbar } from "layouts";
import LogoPNG from "assets/icons/icon-md.png";

const Hero = ({ onClick }) => {
    return (
        <>
            <p className="lg:text-56 lg:leading-68 md:text-38 md:leading-56 text-20 leading-32 text-center md:font-medium font-normal lg:p-0 text-white 2xl:mt-12 mt-28">
                We focus on fundraising so
                <br className='lg:hidden' />
                {" "}you can focus on {" "}
                <br />
                building your business
            </p>
        </>
    )
}

export default Hero