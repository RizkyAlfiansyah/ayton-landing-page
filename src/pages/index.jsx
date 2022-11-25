import { CardSection, FooterSection, Hero, Navbar, SecondSection, SignUpSection } from "layouts";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const ref = useRef(null);
  const contacts = useRef(null);
  const signup = useRef(null);
  const home = useRef(null);

  const _handleClick = (value) => {
    if (value === "Fundraise") {
      signup.current.scrollIntoView({ behavior: "smooth" });
    } else if (value === "About Us") {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (value === "Contact Us") {
      contacts.current.scrollIntoView({ behavior: "smooth" });
    } else {
      home.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar onClick={_handleClick} />
      <div className="w-full xl:min-h-screen md:bg-register bg-register-mobile md:bg-cover bg-cover bg-no-repeat bg-center" ref={home}>
        <div className="w-full xl:h-screen relative flex flex-col justify-center items-center bg-black bg-opacity-50 xl:p-0 lg:py-338 py-268 px-5">
          <Hero />
        </div>
      </div>
      <div className="w-full flex flex-col justify-between items-center bg-white lg:py-40 xl:px-36 px-5 py-14 gap-24 lg:gap-32">
        <SecondSection />
      </div>
      <div className="w-full flex-flex-col justify-center items-center bg-hero-bg bg-cover bg-no-repeat xl:p-0" ref={ref}>
        <CardSection />
      </div>
      <div className="w-full flex-flex-col justify-center items-center xl:p-0" ref={signup}>
        <SignUpSection />
      </div>
      <div className="w-full flex flex-col justify-start items-center lg:py-[72px] py-[50px] bg-black" ref={contacts}>
        <FooterSection />
      </div>
      {/* <p className="text-center font-bold text-2xl">
        Temporary Unavailable, Please come back later
      </p> */}
    </div>
  );
}
