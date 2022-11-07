import React from 'react';
import PartnersPNG from 'assets/images/partners.png';
import TwitterSVG from 'assets/icons/icon-twitter.svg';
import LinkedInSVG from 'assets/icons/icon-linkedin.svg';
import Image from 'next/image';

const FooterSection = () => {
    return (
        <div className='m-auto flex flex-col gap-8 justify-start items-center font-source font-normal text-white text-16 leading-[24px]'>
            <div>
                <Image
                    src={PartnersPNG}
                    alt='Partners'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='w-[335px] text-opacity-70 text-center'>
                    1 St Katherine’s Way, London, E1w 1 UN London, United Kingdom
                </p>
                <p className='w-[335px] text-center'>
                    Info@aytonventures.com
                </p>
            </div>
            <div className='w-full flex justify-center items-center gap-4'>
                <div>
                    <Image src={TwitterSVG} alt="twitter" />
                </div>
                <div>
                    <Image src={LinkedInSVG} alt="linked" />
                </div>
            </div>
            <p>
                Term & condition
            </p>
        </div>
    )
}

export default FooterSection