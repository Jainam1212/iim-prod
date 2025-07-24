import { CarouselPlugin } from "./ui/CarouselComponent" 
import { HomeContent } from "./HomeContent" 
import { StatsSection } from "./Stats"
import { OurOffices } from "./ui/ourOffices";
import { FooterSection } from "./Footer";
// import Particles from "@/bitsblocks/Backgrounds/Particles/Particles"
const image_address:string[]=['/images/P1.avif','/images/P2.avif','/images/P3.avif','/images/P4.avif','/images/P5.avif','/images/P6.avif']
export const HomePageComponent = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* 👇 Fullscreen Background Particles */}
      {/* <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none", // allows clicks to pass through to content
        }}
      >
        <Particles
          particleColors={[
            "#ffffff",
            "#ffd9d9",
            "#c9ffed",
            "#f3ffc2",
            "#c2efff",
            "#eec9ff",
          ]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div> */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <CarouselPlugin images={image_address} />
        <HomeContent />
        <StatsSection />
        <OurOffices />
        <FooterSection />
      </div>
    </div>
  );
};
