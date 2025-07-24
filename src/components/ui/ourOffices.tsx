// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const faqs = [
//   {
//     question: "Why Infra India Mart?",
//     answer:
//       "Infra India Mart offers a one-stop platform for sourcing quality construction and infrastructure materials at competitive prices.",
//   },
//   {
//     question: "What products and services does Infra India Mart offer?",
//     answer:
//       "Infra India Mart provides a wide range of construction and infrastructure materials including steel, AAC Blocks, GGBS, along with B2B services to streamline procurement.",
//   },
//   {
//     question:
//       "How does Infra India Mart ensure the quality of listed products and suppliers?",
//     answer:
//       "We onboard verified suppliers only, conduct quality checks, and gather customer reviews to maintain high standards of reliability and performance.",
//   },
// ];

// export function FAQSection() {
//   return (
//     <section
//       id="FrequentlyAskedQuestionsSection"
//       className="flex items-center flex-col h-fit w-[100vw]"
//     >
//       <h1 className="text-3xl text-center m-4 mb-12">
//         Frequently Asked Questions
//       </h1>
//       <Accordion type="single" collapsible className="w-4/5">
//         {faqs.map((faq, index) => {
//           return (
//             <AccordionItem key={index} value={`faq_item_${index}`} className="m-2">
//               <AccordionTrigger className="pl-4 underline-offset-2 data-[state=open]:underline data-[state=open]:text-orange-400">{faq.question}</AccordionTrigger>
//               <AccordionContent className="p-4">{faq.answer}</AccordionContent>
//             </AccordionItem>
//           );
//         })}
//       </Accordion>
//     </section>
//   );
// }


import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ImageTextItem = {
  src: string;
  label: string;
};

const items: ImageTextItem[] = [
  { src: "/images/AHMEDABAD.avif", label: "AHMEDABAD" },
  { src: "/images/DELHI.avif", label: "DELHI" },
  { src: "/images/MUMBAI.avif", label: "MUMBAI" },
  { src: "/images/HYDERABAD.avif", label: "HYDERABAD" },
];

export const OurOffices = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const blocks = gsap.utils.toArray(".image-text-block") as HTMLElement[];

      gsap.fromTo(
        blocks,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-8 bg-white" id="ourOffices">
      <div className="max-w-screen-lg mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-orange-500 mb-12">
          Our Offices
        </h2>
        <div ref={containerRef} className="flex flex-wrap justify-center gap-24">
          {items.map((item, index) => (
            <div
              key={index}
              className="image-text-block flex flex-col items-center w-32 md:w-40"
            >
              <div className="w-full aspect-square mb-3">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </div>
              <p className="text-center text-base font-bold text-gray-800">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
