import { trpc } from "@/utils/trpc";
import { useState, useEffect, useRef, Key } from "react";
import { useLocation } from "react-router-dom";
import type { FetchDataOutput } from "../utils/trpc";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "../components/contactForm";

gsap.registerPlugin(ScrollTrigger);

export const MoreInfo = () => {
  const [locationParam, setLocationParam] = useState("");
  const [isValid, setIsValid] = useState(false);
  const loc = useLocation();

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const srchParm = new URLSearchParams(loc.search);
    const locParam = srchParm.get("loc");

    if (typeof locParam === "string" && locParam.trim() !== "") {
      setLocationParam(locParam);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [loc.search]);

  const fetchMoreInfo = trpc.fetchData.useQuery(
    { searchQuery: locationParam },
    { enabled: isValid }
  );

  useEffect(() => {
    if (!fetchMoreInfo.data) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 80%",
      },
    });

    tl.fromTo(
      leftRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      rightRef.current,
      { scale: 0.95, opacity: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
        },
      }
    );
  }, [fetchMoreInfo.data]);

  if (fetchMoreInfo.isLoading)
    return <p className="text-center mt-10">Loading...</p>;
  if (fetchMoreInfo.error) return <p>Error: {fetchMoreInfo.error.message}</p>;

  const data = fetchMoreInfo.data as FetchDataOutput;

  return (
    <div className="w-full bg-gradient-to-br from-indigo-50 to-white">
      <div className="min-h-fit px-4 sm:px-8 lg:px-20 py-10">
        {isValid ? (
          data?.length ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.map((item:any, index) => (
              <div
                key={item._id || index}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-7xl mx-auto mb-20"
              >
                {/* Left: Title & Content */}
                <div ref={leftRef} className="space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-700">
                    {item.title}
                  </h1>
                  <div
                    className="text-gray-800 text-base sm:text-lg leading-relaxed tracking-wide max-h-60 overflow-y-scroll pr-3 p-4 rounded-xl bg-white/60 backdrop-blur-md shadow-lg border border-white/40"
                  >
                    {item.content}
                  </div>
                </div>

                {/* Right: Creative Image Grid */}
                <div
                  ref={rightRef}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
                >
                  {item.images.map((imgUrl: string | undefined, i: Key | null | undefined) => (
                    <div
                      key={i}
                      className="overflow-hidden bg-white rounded-2xl shadow-md hover:scale-105 transform transition duration-500"
                    >
                      <img
                        src={imgUrl}
                        alt={`Image ${i}`}
                        className="object-contain w-full h-36 sm:h-44 md:h-52"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No results found.</p>
          )
        ) : (
          <p className="text-red-600 font-semibold text-center">
            Invalid or missing{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">loc</code> param
          </p>
        )}
      </div>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-b from-white to-purple-50 border-t border-gray-200">
        <ContactForm />
      </div>
    </div>
  );
};
