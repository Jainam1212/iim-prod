import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HowWeSupport = () => {
  const title = useRef<HTMLDivElement>(null);
  const subTitle = useRef<HTMLParagraphElement>(null);
  const pointsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (title.current) {
      gsap.fromTo(
        title.current,
        { opacity: 0, x: 30, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (subTitle.current) {
      gsap.fromTo(
        subTitle.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subTitle.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (pointsContainer.current) {
      gsap.fromTo(
        pointsContainer.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: pointsContainer.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const ourSupport = [
    "Expert guidance on tender documentation and budget estimation.",
    "Connection with verified, cost-efficient manufacturing partners.",
    "Strict quality checks and responsive sales service.",
    "A single point of contact for managing requirements and coordination.",
    "Reliable delivery services and flexible financial solutions.",
  ];

  return (
    <div className="flex flex-row flex-wrap w-[100vw] p-8 items-center">
      <div className="w-full md:w-1/2 p-4">
        <img
          src="/images/support.avif"
          alt="Support"
          style={{ width: "85%", display: "block", margin: "auto" }}
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="text-3xl font-extrabold mb-4" ref={title}>
          How <span className="text-orange-500">INFRA INDIA MART</span> supports
          you
        </div>
        <p className="mb-6 text-gray-700" ref={subTitle}>
          At Infra India Mart, we are committed to helping you succeed by
          ensuring access to high-quality cement products at the most competitive
          prices. Our dedicated team works closely with you to meet your project
          needs with efficiency and reliability.
        </p>
        <div className="space-y-4" ref={pointsContainer}>
          {ourSupport.map((support, index) => (
            <div key={index} className="flex flex-row gap-3 items-center">
              <img
                src="/images/check.avif"
                alt="check"
                style={{ width: "25px", height: "25px" }}
              />
              <p className="text-gray-800 font-semibold text-lg">{support}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
