/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export const ContactUsPage = () => {
    const [sectionHeight, setSectionHeight] = useState("100vh");
    useEffect(() => {
      const nav = document.getElementById("NavigationBar");
      if (nav) {
        const navHeight = nav.offsetHeight;
        setSectionHeight(`calc(100vh - ${navHeight}px)`);
      }
    }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <section
      id="ContactUs"
      style={{ height: sectionHeight , backgroundImage: "url(/images/map.avif)"}}
      className="py-16 px-4 md:px-10 overflow-y-auto bg-center bg-no-repeat bg-contain"
    >
      <div className="mx-auto grid md:grid-cols-2 gap-10 items-center h-full">
        {/* Left Card */}
        <div className="bg-white p-6 rounded-2xl shadow-xl space-y-6">
          <article>
            <h1 className="text-2xl font-bold mb-2">
              We’re Here to Help – Contact Us
            </h1>
            <p className="text-sm text-gray-700">
              Our support team is available to answer your queries about
              materials, pricing, and logistics. Let’s talk!
            </p>
          </article>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-sm text-gray-600">
                  305, Shivam Arcade, near S.P. Ringroad, Hanspura, Ahmedabad.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-sm text-gray-600">+91 9099&nbsp;180&nbsp;208 | 9173&nbsp;822&nbsp;567</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Hours</h3>
                <p className="text-sm text-gray-600">Mon - Sat: 9 AM - 7 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch with Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Comment or message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-900"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
