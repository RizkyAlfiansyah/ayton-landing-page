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
      <div className="w-full h-full bg-hero-bg bg-cover bg-no-repeat">
        <div className="w-full relative h-full flex flex-col justify-center items-center bg-black bg-opacity-70 gap-3">
          <Hero onClick={_handleClick} />
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center bg-white xl:p-32">
        <SecondSection />
      </div>
      <div className="w-full min-h-full flex-flex-col justify-center items-center bg-register bg-cover bg-no-repeat" ref={ref}>
        <SignUpSection />
      </div>
      <div className="w-full flex flex-col justify-start items-center py-[72px] bg-black" ref={contacts}>
        <FooterSection />
      </div>
    </div>
  );
}
