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

gsap.registerPlugin(ScrollTrigger);

type CarouselProps = {
  images: string[];
  title: string;
};

export function LogoCarousel({ images, title }: CarouselProps) {
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
    const elements = carouselRef.current?.children;
    if (elements) {
      gsap.fromTo(
        elements,
        { opacity: 0.2, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.15,
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
    <section id="LogoCarousel" className="w-full px-4 py-12">
      <h1 className="text-3xl md:text-4xl text-orange-500 font-bold text-center mb-10">
        {title}
      </h1>

      <Carousel
        plugins={[plugin.current]}
        className="relative"
        ref={carouselRef}
      >
        <CarouselContent className="flex items-center">
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 flex justify-center"
            >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-20 md:h-24 object-contain mx-auto"
                />              
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
