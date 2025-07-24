import BlurText from "@/bitsblocks/TextAnimations/BlurText/BlurText";
import { CementProductList } from "./cementProductsList";


export const CementBasedOnType = () => {
  return (
    <section
      id="TypeOfCementBasedOnCategory"
      className="w-full px-4 md:px-8 max-w-screen-xl mx-auto mt-8 mb-20"
    >
      <h2 className="w-full text-center">
        <BlurText
          text="Discover Our Premium Cement Range by Product Type"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-2xl sm:text-3xl md:text-4xl font-bold my-8 text-orange-600 justify-center"
        />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        <CementProductList
          name="OPC 53 - OPC 43"
          isCode="IS-12269-1987"
          colorOfCode="rgb(0,0,0)"
          idTXT="opc"
        />
        <CementProductList
          name="PSC / Slag"
          isCode="IS-455:2015"
          colorOfCode="rgb(255,165,0)"
          idTXT="psc"
        />
        <CementProductList
          name="SRPC / SRC"
          isCode="IS-12330"
          colorOfCode="rgb(0,0,0)"
          idTXT="srpc"
        />
        <CementProductList
          name="PPC"
          isCode="IS-1489-1991"
          colorOfCode="rgb(255,0,0)"
          idTXT="ppc"
        />
      </div>
    </section>
  );
};
