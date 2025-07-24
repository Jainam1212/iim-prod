import { useRef, useEffect } from "react";
import "../ourstr.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const OurStrengths = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate Title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate Cards
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.querySelectorAll(".card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section id="OurStrengthSection" className="min-h-fit w-screen">
      <div className="service w-full text-center">
        <h2 ref={titleRef} className="text-orange-500 text-3xl font-bold mb-8">
          Our Strengths
        </h2>
        <div ref={cardsContainerRef} className="cards w-full">
          <div className="flex flex-row w-9/12 flex-wrap justify-center gap-6 m-auto">
            <div className="card">
              <img
                src="/images/handshake.avif"
                alt="Best Deals"
                className="w-[80%] h-auto"
              />
              <p className="text-xl font-medium">Best Deals</p>
            </div>
            <div className="card">
              <img
                src="/images/indiaMap.png"
                alt="PAN India"
                className="w-[60%] h-auto"
              />
              <p className="text-xl font-medium">PAN India Distribution</p>
            </div>
            <div className="card">
              <img
                src="/images/people.avif"
                alt="Strong Networking"
                className="w-[55%] h-auto"
              />
              <p className="text-xl font-medium">Strong Networking</p>
            </div>
            <div className="card">
              <img
                src="/images/truck.avif"
                alt="Quick Transport"
                className="w-[65%] h-auto"
              />
              <p className="text-xl font-medium">Quick Transport</p>
            </div>
            <div className="card">
              <img
                src="/images/trust.avif"
                alt="Trusted Deals"
                className="w-[65%] h-auto"
              />
              <p className="text-xl font-medium">Trusted Deals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
