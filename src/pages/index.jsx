import { FooterSection, Hero, SecondSection, SignUpSection } from "layouts";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const contacts = useRef(null);

  const _handleClick = (value) => {
    if (value === "Home") {
      window.location.href = "/";
    } else if (value === "Register") {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (value === "Contact Us") {
      contacts.current.scrollIntoView({ behavior: "smooth" });
    } else {
      return;
    }
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="w-full bg-hero-bg bg-cover bg-no-repeat bg-center">
        <div className="w-full relative flex flex-col justify-center items-center bg-black bg-opacity-70 gap-3 lg:px-234 lg:py-338 py-268 px-5">
          <Hero onClick={_handleClick} />
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col justify-between items-center bg-white xl:p-32 lg:p-24 lg:pb-[71px] px-5 py-14 gap-24 lg:gap-32">
        <SecondSection />
      </div>
      <div className="w-full min-h-full flex-flex-col justify-center items-center bg-register bg-cover md:bg-center bg-[30%] bg-no-repeat xl:p-0" ref={ref}>
        <SignUpSection />
      </div>
      <div className="w-full flex flex-col justify-start items-center lg:py-[72px] py-[50px] bg-black" ref={contacts}>
        <FooterSection />
      </div>
    </div>
  );
}
