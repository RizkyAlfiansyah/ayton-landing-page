import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { Navbar } from "layouts";
import LogoPNG from "assets/icons/icon-md.png";

const Hero = ({ onClick }) => {
    return (
        <>
            <p className="md:flex hidden w-80 sm:w-auto xl:text-56 xl:leading-78 tracking-wide md:text-40 md:leading-48 text-32 leading-40 text-center md:font-medium font-caslon font-normal lg:p-0 text-white 2xl:mt-12 mt-28">
                We focus on fundraising so
                <br className='lg:hidden' />
                {" "}you can focus on {" "}
                <br />
                building your business
            </p>
            <div className="md:hidden sm:w-auto xl:text-56 xl:leading-78 tracking-wider md:text-40 md:leading-48 text-32 leading-40 text-center md:font-medium font-caslon font-normal lg:p-0 text-white 2xl:mt-12 mt-24 bg-black bg-opacity-40 border-[0.5px] border-white p-4">
                <p>
                    We focus on <br /> fundraising so
                    <br className='lg:hidden' />
                    {" "}you can focus <br /> on building <br /> your business
                </p>
            </div>
        </>
    )
}

export default Hero