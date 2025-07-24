import SpotlightCard from "@/bitsblocks/Components/SpotlightCard/SpotlightCard";
import { Button } from "@/components/ui/button"
import { useEffect,useRef, useState } from "react";
import { gsap } from "gsap";
import './component.css'
import ToastForm from "./ToastForm";
import { useNavigate } from "react-router-dom";

interface CementProps{
    imgAddress:string;
    idTxt:string
}
export function CementCompanyList(props:CementProps) {
    const boxRef = useRef<HTMLDivElement>(null);
    const [showForm, setShowForm] = useState(false);

    const navigate = useNavigate();
      const handleMoreInfo = (e: React.MouseEvent, target: string, loc: string) => {
        e.preventDefault();
        try {
          const separator = target.includes("?") ? "&" : "?";
          const finalPath = `${target}${separator}loc=${encodeURIComponent(loc)}`;
    
          console.log("Navigating to:", finalPath);
          navigate(finalPath);
        } catch (error) {
          console.error("Invalid URL in handleMoreInfo:", error);
        }
      };

    useEffect(()=>{
    const elements = boxRef.current;
    if (elements) {
        gsap.fromTo(
          elements,
          { opacity: 0.3, scale: .9, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.3, 
            scrollTrigger: {
              trigger: boxRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
    }
  },[])
  return (
    <div className="flex flex-row justify-center">
      <div ref={boxRef}>
        <SpotlightCard className="w-fit">
          <div className="m-4">
            <div className="flex flex-row justify-center">
              <img
                src={props.imgAddress}
                alt="logo"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div className="buttons-container flex flex-row gap-2">
            <Button
              variant={"default"}
              className="m-2 hover:bg-gray-600"
              id={props.idTxt}
              onClick={() => setShowForm(true)}
            >
              Inquire Now
            </Button>
            <Button
              variant={"secondary"}
              className="m-2 border-slate-300 bg-slate-100 border hover:bg-zinc-200"
              id={props.idTxt}
              onClick={(e) => {
                handleMoreInfo(e, "/iim/moreInfo", props.idTxt);
              }}
            >
              More Info
            </Button>
          </div>
        </SpotlightCard>
      </div>
      <ToastForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        selectedId={props.idTxt}
      />
    </div>
  );
}
