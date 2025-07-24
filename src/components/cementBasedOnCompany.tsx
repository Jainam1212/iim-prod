import BlurText from "@/bitsblocks/TextAnimations/BlurText/BlurText";
import { CementCompanyList } from "./cementCompanyList";

const cementCompanies = [
  "/images/companyLogos/UTCL.png",
  "/images/companyLogos/shree.png",
  "/images/companyLogos/jkl.png",
  "/images/companyLogos/ambuja.png",
  "/images/companyLogos/birla.png",
  "/images/companyLogos/jsw.png",
  "/images/companyLogos/acc.png",
  "/images/companyLogos/jkc.png",
  "/images/companyLogos/bangar.png",
  "/images/companyLogos/hathi.png",
  "/images/companyLogos/kamal.png",
  "/images/companyLogos/nuvoco.png",
  "/images/companyLogos/wonder.png",
  "/images/companyLogos/ramco.png",
  "/images/companyLogos/dalmiya.png",
  "/images/companyLogos/sagar.png",
  "/images/companyLogos/siddhi.png",
  "/images/companyLogos/unity.png",
  "/images/companyLogos/hibond.png",
  "/images/companyLogos/icl.png",
];
const idList = ['utcl','shree','jkl','ambuja','birla','jsw','acc','jkc','bangar','hathi','kamal','nuvoco','wonder','ramco','dalmiya','sagar','siddhi','unity','hibond','icl']

export const CementBasedOnCompany = () => {
  return (
    <section
      id="CompaniesWeAreAssociatedWith"
      className="w-[90vw] mx-auto mt-12 mb-16"
    >
      <BlurText
        text="Explore Our Premium Cement Range by Associated Companies"
        delay={100}
        animateBy="words"
        direction="top"
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-orange-600 justify-center"
      />

      {/* Grid layout adjusted for responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {cementCompanies.map((imgAddress, index) => (
          <div key={index} className="cementTypeContainer h-fit">
            <div className="listOfCements">
              <CementCompanyList
                imgAddress={imgAddress}
                idTxt={idList[index]}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
