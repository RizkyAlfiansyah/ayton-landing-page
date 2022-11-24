import React from 'react';
import PartnersPNG from 'assets/images/partners.png';
import TwitterSVG from 'assets/icons/icon-twitter.svg';
import LinkedInSVG from 'assets/icons/icon-linkedin.svg';
import TiktokSVG from 'assets/icons/icon-tiktok.svg';
import Image from 'next/image';

const FooterSection = () => {
    return (
        <div className='m-auto flex flex-col gap-8 justify-start items-center font-normal text-white text-16 leading-[24px]'>
            <div className='hidden lg:flex'>
                <Image
                    src={PartnersPNG}
                    alt='Partners'
                />
            </div>
            <div className='lg:hidden font-source font-semibold font-20 leading-26 tracking-19 flex flex-col gap-2 justify-start items-center'>
                <p className='font-semibold'>AYTON</p>
                <p className='font-light'>CAPITAL PARTNERS</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='w-[335px] text-white text-opacity-70 text-center'>
                    1 St Katherine’s Way, London, E1W 1 UN London, United Kingdom
                </p>
                <p className='w-[335px] text-center'>
                    info@aytoncapital.com
                </p>
            </div>
            <div className='w-full flex justify-center items-center gap-4'>
                <div>
                    <Image src={TwitterSVG} alt="twitter" />
                </div>
                <div>
                    <Image src={LinkedInSVG} alt="linked" />
                </div>
                <div>
                    <Image src={TiktokSVG} alt="tiktok" />
                </div>
            </div>
        </div>
    )
}

export default FooterSection