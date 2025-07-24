import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, X, Linkedin } from "lucide-react";

export const FooterSection = ()=>{
  return (
    <footer
      className="text-white py-10 px-6 md:px-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/bgblackimg.avif)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <img
            src="/images/iimlogo.webp"
            alt="logo"
            style={{
              height: "45px",
              maxHeight: "45px",
              marginBottom: "10px"
            }}
          />
          <p className="text-sm ">
            Your one-stop destination for top-quality construction materials.
          </p>
        </div>

        {/* Our Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter">
              <X className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Contact & Subscribe */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">📞 +91 9876543210</p>
          <p className="text-sm mb-4">📧 support@mycompany.com</p>

          <h4 className="text-md font-semibold mb-2">
            Subscribe for WhatsApp Updates
          </h4>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <Input
              type="tel"
              placeholder="Enter phone number"
              className="bg-white text-black w-full sm:w-auto"
            />
            <Button className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Code-O-Logic. All rights reserved.
      </div>
    </footer>
  );
}
