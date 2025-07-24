import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import "../component.css";
import { Button } from "./button";
import { ListItem } from "@mui/material";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const components: { title: string; href: string }[] = [
  { title: "About Us", href: "/iim/#AboutUsSection" },
  { title: "Our Strengths", href: "/iim/#OurStrengthSection" },
  { title: "Progress", href: "/iim/#StatSection" },
  { title: "FAQs", href: "/iim/#FrequentlyAskedQuestionsSection" },
  { title: "Tabs", href: "/docs/primitives/tabs" },
  { title: "Tooltip", href: "/docs/primitives/tooltip" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  const handleScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault();

    const sectionId = target.split("#")[1];
    const pageId = target.split("#")[0];
    console.log('section n page',sectionId,'   ',pageId);
    
    const targetElement = document.getElementById(sectionId);

    const isSamePage = window.location.pathname === pageId;

    if (isSamePage && targetElement) {
      gsap.to(window, {
        duration: 1,
        scrollTo: `#${sectionId}`,
        ease: "power2.out",
      });
    } else {
      navigate(pageId);
    }
    setIsMenuOpen(false);
  };

  return (
    <section
      id="NavigationBar"
      className="top-0 sticky z-50 bg-white shadow-md"
    >
      <div className="navbar_full_section flex items-center justify-between px-3 py-1 sm:px-4 sm:py-2 md:px-6 lg:px-10 transition-all duration-300">
        <div className="logo_section">
          <picture>
            <source srcSet="/images/iimlogo.avif" type="image/avif" />
            <source srcSet="/images/iimlogo.webp" type="image/webp" />
            <img
              src="/images/iimlogo.webp"
              alt="logo"
              className="iim_logo"
              style={{
                height: "50px",
                padding: "8px",
                maxHeight: "50px",
                transition: "all 0.3s ease",
              }}
              loading="eager"
            />
          </picture>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2 xl:gap-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="py-1 px-2 h-auto">
                  <a href="/iim" onClick={(e) => handleScroll(e, "/iim")}>
                    Home
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    {components.map((component) => (
                      <ListItem key={component.title}>
                        <a
                          href={component.href}
                          onClick={(e) => handleScroll(e, component.href)}
                        >
                          {component.title}
                        </a>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {[
                { label: "Cement", path: "/iim/cement" },
                { label: "Steel", path: "/iim/steel" },
                { label: "GGBS", path: "/iim/ggbs" },
                { label: "AAC Blocks", path: "/iim/aac" },
                { label: "Construction Chemicals", path: "/iim/chemicals" },
              ].map(({ label, path }) => (
                <NavigationMenuItem key={label}>
                  <Button
                    variant="ghost"
                    className="py-1 px-2 h-auto text-sm lg:text-base"
                  >
                    <a href={path} onClick={(e) => handleScroll(e, path)}>
                      {label}
                    </a>
                  </Button>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Button
                  variant="default"
                  className="bg-orange-500 hover:bg-orange-600 py-1 px-3 h-auto text-sm lg:text-base"
                  onClick={(e) => handleScroll(e, "/iim/contactForm")}
                >
                  Contact Us
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            className="text-orange-500 focus:outline-none p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-2 space-y-2 transition-all duration-300">
          <ul className="flex flex-col gap-2 py-1">
            <li>
              <a
                href="/iim"
                className="text-orange-500 font-semibold block py-1"
                onClick={(e) => handleScroll(e, "/iim")}
              >
                Home
              </a>
            </li>
            {components.map((component) => (
              <li key={component.title}>
                <a
                  href={component.href}
                  className="text-orange-500 block py-1"
                  onClick={(e) => handleScroll(e, component.href)}
                >
                  {component.title}
                </a>
              </li>
            ))}
            {[
              { label: "Cement", path: "/iim/cement" },
              { label: "Steel", path: "/iim/steel" },
              { label: "GGBS", path: "/iim/ggbs" },
              { label: "AAC Blocks", path: "/iim/aac" },
              { label: "Construction Chemicals", path: "/iim/chemicals" },
            ].map(({ label, path }) => (
              <li key={label}>
                <a
                  href={path}
                  className="text-orange-500 block py-1"
                  onClick={(e) => handleScroll(e, path)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <button
                className="w-full bg-orange-500 text-white py-2 rounded-md"
                onClick={(e) => handleScroll(e, "/iim/contactForm")}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};
