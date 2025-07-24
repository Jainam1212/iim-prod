import { useEffect, useState, useRef } from "react";
import { ChartComponent } from "./ui/ourChart";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  number: number;
}

const Counter: React.FC<CounterProps> = ({ number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const speed = 40;

  useEffect(() => {
    const increment = Math.trunc(number / speed);
    let current = 0;

    const updateNumber = () => {
      if (current < number) {
        current += increment;
        if (current > number) current = number;
        setCount(current);
        setTimeout(updateNumber, 50);
      }
    };

    if (ref.current) {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 80%",
        once: true,
        onEnter: () => updateNumber(),
      });
    }
  }, [number]);

  return (
    <h2
      ref={ref}
      className="counter-numbers text-center text-2xl md:text-3xl font-bold"
    >
      {count}+
    </h2>
  );
};

export const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".stat"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="StatSection"
      className="w-screen flex flex-col justify-center items-center p-12"
    >
      <p className="text-center text-2xl md:text-4xl font-bold text-orange-500 mb-12">
        We are revolutionizing the construction ecosystem and scaling rapidly!
      </p>

      <div className="flex flex-col lg:flex-row w-full gap-8 items-start">
        {/* Stats */}
        <div className="flex flex-col gap-8 w-full lg:w-3/5 m-auto">
          <div className="flex flex-col md:flex-row justify-evenly gap-6">
            <div className="stat flex-1 p-6 bg-white rounded-md shadow-md text-center">
              <Counter number={325} />
              <p className="text-sm md:text-base mt-2">
                Number of happy customers
              </p>
            </div>
            <div className="stat flex-1 p-6 bg-white rounded-md shadow-md text-center">
              <Counter number={895} />
              <p className="text-sm md:text-base mt-2">
                Number of projects we served
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly gap-6">
            <div className="stat flex-1 p-6 bg-white rounded-md shadow-md text-center">
              <Counter number={2872} />
              <p className="text-sm md:text-base mt-2">
                Number of purchase orders
              </p>
            </div>
            <div className="stat flex-1 p-6 bg-white rounded-md shadow-md text-center">
              <Counter number={163081} />
              <p className="text-sm md:text-base mt-2">
                Number of consignments delivered
              </p>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="chart w-full lg:w-2/5 h-full bg-white rounded-md shadow-md p-4">
          <ChartComponent />
        </div>
      </div>
    </section>
  );
};
