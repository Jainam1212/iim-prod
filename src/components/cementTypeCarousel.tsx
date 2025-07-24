import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BlurText from "@/bitsblocks/TextAnimations/BlurText/BlurText";

type CarouselProps = {
  images: string[];
};

gsap.registerPlugin(ScrollTrigger);

export function CementBagsPerCategory({ images }: CarouselProps) {
  const plugin = useRef(
    Autoplay({
      delay: 1500,
      stopOnInteraction: false,
      stopOnFocusIn: false,
      stopOnLastSnap: false,
      stopOnMouseEnter: false,
    })
  );

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = carouselRef.current?.querySelectorAll(".carousel-item");
    if (elements) {
      gsap.fromTo(
        elements,
        { opacity: 0.3, scale: 0.8, y: 100 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="BagsWeSell"
      className="w-full px-4 sm:px-6 lg:px-12 mt-8 mb-20 overflow-hidden"
    >
      <BlurText
        text="Showcasing Our Top-Quality Cement"
        delay={100}
        animateBy="words"
        direction="top"
        className="text-2xl sm:text-3xl md:text-4xl text-center mb-12 text-orange-600 justify-center"
      />

      <div ref={carouselRef}>
        <Carousel plugins={[plugin.current]}>
          <CarouselContent className="items-center">
            {images.map((src, index) => (
              <CarouselItem
                key={index}
                className="carousel-item flex justify-center md:basis-1/4 lg:basis-1/5"
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-[120px] sm:w-[80px] md:w-[100px] h-auto object-contain mx-auto"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
