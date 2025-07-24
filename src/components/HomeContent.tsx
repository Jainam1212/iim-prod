import { HowWeSupport } from "./HowWeSupport"
import ScrollVideoAbout from "./ui/AboutUs"
import { OurStrengths } from "./ui/OurStrengths"
import { LogoCarousel } from "./ui/logoCarousel";

export const HomeContent = () => {
    const company_logos_array: string[] = [
      "/images/companyLogos/acc.png",
      "/images/companyLogos/ambuja.png",
      "/images/companyLogos/bangar.png",
      "/images/companyLogos/dalmiya.png",
      "/images/companyLogos/birla.png",
      "/images/companyLogos/hathi.png",
      "/images/companyLogos/hibond.png",
      "/images/companyLogos/icl.png",
      "/images/companyLogos/jkc.png",
      "/images/companyLogos/jkl.png",
      "/images/companyLogos/birla.png",
      "/images/companyLogos/nuvoco.png",
      "/images/companyLogos/ramco.png",
      "/images/companyLogos/jsw.png",
      "/images/companyLogos/kamal.png",
      "/images/companyLogos/sagar.png",
      "/images/companyLogos/shree.png",
      "/images/companyLogos/siddhi.png",
      "/images/companyLogos/UTCL.png",
      "/images/companyLogos/unity.png",
      "/images/companyLogos/wonder.png",
    ];
    const projectsServed: string[] = [
      "/images/projects/i2.png",
      "/images/projects/i3.png",
      "/images/projects/i4.png",
      "/images/projects/i5.png",
      "/images/projects/i6.png",
      "/images/projects/i7.png",
      "/images/projects/i8.png",
      "/images/projects/i9.png",
      "/images/projects/i10.png",
      "/images/projects/i11.png",
      "/images/projects/i12.png",
      "/images/projects/i13.png",
      "/images/projects/i14.png",
      "/images/projects/i15.png",
      "/images/projects/i16.png",
      "/images/projects/i17.png",
      "/images/projects/i18.png",
      "/images/projects/i19.png",
      "/images/projects/i20.png",
      "/images/projects/i21.png",
      "/images/projects/i22.png",
    ];
    return (
      <>
        <ScrollVideoAbout></ScrollVideoAbout>
        <LogoCarousel
          images={company_logos_array}
          title="We associate with prominent industrial firms"
        />
        <HowWeSupport></HowWeSupport>
        <OurStrengths></OurStrengths>
        <div className="mt-12">
          <LogoCarousel
            images={projectsServed}
            title="We provided service in various sectors"
          />
        </div>
      </>
    );
}