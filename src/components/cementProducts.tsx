import { Separator } from "./ui/separator"
import { CementBasedOnType } from "./cementBasedOnType"
import { CementBagsPerCategory } from "./cementTypeCarousel"
import { CementBasedOnCompany } from "./cementBasedOnCompany"
const images:string[]=['/images/cementBags/ACC1.png','/images/cementBags/ambuja1.png','/images/cementBags/BANGAR.png','/images/cementBags/cking1.png','/images/cementBags/dalmiya1.png','/images/cementBags/HATHI1.png','/images/cementBags/hib1.png','/images/cementBags/jkl1.png','/images/cementBags/JKS1.png','/images/cementBags/jsw1.png','/images/cementBags/KAMAL.png','/images/cementBags/MPB1.png','/images/cementBags/mpb2.png','/images/cementBags/nuvo1.png','/images/cementBags/ramco1.png','/images/cementBags/SAGAR1.png','/images/cementBags/SHREE1.png','/images/cementBags/unity.png','/images/cementBags/UTCL.png','/images/cementBags/wonder1.png']

export const OurCementProducts = ()=>{
    return(
    <section id="OurCementProducts">
        <Separator className="my-4 w-[90vw] mx-auto" />
            <CementBasedOnType />
            <CementBagsPerCategory images={images}/>
        <Separator className="w-[90vw] mx-auto mt-8" />
            <CementBasedOnCompany />
        <Separator className="my-4 w-[90vw] mx-auto" />
    </section>
    )
}