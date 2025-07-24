import { useEffect, useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
type CarouselProps = {
  images: string[];
};

gsap.registerPlugin(ScrollTrigger);

export function CarouselPlugin({images}:CarouselProps) {
  const plugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false,stopOnFocusIn:false,stopOnLastSnap:false,stopOnMouseEnter:false })
  )
  const carousel_ref = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const elements = carousel_ref.current?.children;
    if (elements) {
        gsap.fromTo(
          elements,
          { opacity: 0.3, scale: .4, y: 100 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 2.5,
            ease: "power2.out",
            stagger: 0.3, 
            scrollTrigger: {
              trigger: carousel_ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
    }
  },[])

  return (
    <section id="HomePageCarpusel">
    <Carousel
      plugins={[plugin.current]}
      className="carousel_section"
      ref={carousel_ref}
    >
        <CarouselContent>
        {images.map((address, index) => (
            <CarouselItem className="carousel_item" key={index}>
                <img key={index} src={address} alt={`Slide ${index + 1}`} />
            </CarouselItem>
        ))}
        </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  )
}
