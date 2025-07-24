import { useRef } from "react";
import "../component.css";

const ScrollVideoAbout = () => {
  const aboutParaRef = useRef(null);

  return (
    <section id="AboutUsSection" className="py-12 px-4 md:px-10 lg:px-20">
      <div className="relative flex flex-col lg:flex-row items-start justify-center gap-8">
        {/* Content */}
        <div className="about_content z-10 flex flex-col w-full lg:w-2/3">
          <div className="about_section_1 mb-4">
            <h2 className="text-orange-500 text-2xl text-left md:text-3xl font-bold mt-2">
              ⎯⎯⎯ Who we are
            </h2>
          </div>

          <div className="about_section_2" ref={aboutParaRef}>
            <div className="about_para text-base md:text-lg text-justify font-medium space-y-4">
              <div className="lg:max-h-full max-h-40 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200 transition-all duration-300 ease-in-out">
                <p>
                  INFRA INDIA MART is a leading and rapidly expanding ISO
                  9001:2015 certified cement supplier company in Pan India. Our
                  company prides itself on being professionally managed and
                  dedicated to meeting the needs of both urban and rural
                  development projects, infrastructure Projects, Special
                  Economic Zone (SEZ) developments, as well as institutional
                  customers.
                </p>
                <p>
                  INFRA INDIA MART has established itself as a trusted and
                  reliable partner in the construction industry. INFRA INDIA
                  MART supplied cement to Highways, Roads, and Bridges Projects,
                  Railway and Airports Projects, Building Construction Projects,
                  Water Supply, Water Processes & Sewerage Projects, Power
                  Generation and Transmission Projects, Factories Construction
                  Projects, and much more.
                </p>
                <p>
                  INFRA INDIA MART supplies Ordinary Portland cement - OPC 53
                  Grade & OPC 43 Grade, Portland Pozzolana Cement - PPC Cement,
                  Sulphate Resisting Cement – SRPC Cement, Blast Furnace Slag
                  Cement – PSC Slag Cement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <img
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 object-contain p-2 m-auto"
          style={{ aspectRatio: "4 / 3" }}
          src="/images/india.avif"
          alt="India Map"
          width={300}
          height={225}
        />
      </div>
    </section>
  );
};

export default ScrollVideoAbout;
