import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SpotlightCard from "@/bitsblocks/Components/SpotlightCard/SpotlightCard";
import { Button } from "@/components/ui/button";
import ToastForm from "./ToastForm";
import "./component.css";
import { useNavigate } from "react-router-dom";

interface CementProps {
  name: string;
  isCode: string;
  colorOfCode: string;
  idTXT: string;
}

export function CementProductList(props: CementProps) {
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



  useEffect(() => {
    const element = boxRef.current;
    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0.3, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.3,
        }
      );
    }
  }, []);

  return (
    <>
      <div className="flex flex-row">
        <div ref={boxRef}>
          <SpotlightCard>
            <div className="m-4">
              <div className="flex flex-row justify-center">
                <p className="text-2xl font-bold" id="nameOfTypeofCem">
                  {props.name}
                </p>
              </div>
              <p
                className="font-extrabold text-center text-lg"
                style={{ color: props.colorOfCode }}
              >
                {props.isCode}
              </p>
            </div>
            <div className="buttons-container flex flex-row gap-2">
              <Button
                variant={"default"}
                className="m-2 hover:bg-gray-600"
                id={props.idTXT}
                onClick={() => setShowForm(true)}
              >
                Inquire Now
              </Button>
              <Button
                variant={"secondary"}
                className="m-2 border-slate-300 bg-slate-100 border hover:bg-zinc-200"
                id={props.idTXT}
                onClick={e=>{handleMoreInfo(e,'/iim/moreInfo',props.idTXT)}}
              >
                More Info
              </Button>
            </div>
          </SpotlightCard>
        </div>
      </div>
      <ToastForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        selectedId={props.idTXT}
      />
    </>
  );
}
