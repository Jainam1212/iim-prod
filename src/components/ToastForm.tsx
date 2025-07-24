import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

interface ToastFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedId: string;
}

const dropdownOptions: Record<string, string> = {
  opc: "OPC 43/53",
  ppc: "PPC Cement",
  psc: "PSC/Slag Cement",
  srpc: "SRPC/SRC Cement",
  ultc: "Ultratech Cement",
  shree: "Shree Cement",
  jkl: "JK Lakshmi Cement",
  ambuja: "Ambuja Cement/Adani Cement",
  birla: "MP Birla Cement",
  jsw: "JSW Cement",
  acc: "ACC Cement/Adani Cement",
  jkc: "JK Super Cement",
  bangar: "Bangar Cement",
  hathi: "Hathi Cement",
  kamal: "Kamal Cement",
  nuvoco: "Nuvoco Cement",
  wonder: "Wonder Cement",
  ramco: "Ramco Cement",
  dalmiya: "Dalmiya Bharat Cement",
  sagar: "Sagar Cement",
  siddhi: "Siddhi Cement",
  unity: "Unity Cement",
  hibond: "Hibond Cement",
  icl: "India Cement/Coromandal Cement",
};

export default function ToastForm({
  isOpen,
  onClose,
  selectedId,
}: ToastFormProps) {
  const toastRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    if (isOpen && toastRef.current) {
      gsap.fromTo(
        toastRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (selectedId && dropdownOptions[selectedId]) {
        // console.log(selectedId,"helo");
        
      setSelectedOption(dropdownOptions[selectedId]);
    } else {
      setSelectedOption("");
    }
  }, [selectedId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div
        ref={toastRef}
        className="bg-white border shadow-xl rounded-xl p-6 w-full max-w-md z-50"
      >
        <h2 className="text-lg font-bold mb-4 text-center text-orange-500">
          Inquire Now
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!/^[6-9]\d{9}$/.test(contact)) {
              alert("Please enter a valid Indian mobile number.");
              return;
            }
            console.log("Form Data:");
            console.log("Cement Type:", selectedOption);
            console.log("Name:", name);
            console.log("Contact:", contact);
            console.log("Email:", email);
            console.log("Message:", message);
            // Handle form submission logic
            onClose();
          }}
          className="flex flex-col gap-4"
        >
          <select
            className="border rounded px-3 py-2"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            required
          >
            <option value="">Select Cement Type</option>
            {Object.entries(dropdownOptions).map(([key, value]) => (
              <option key={key} value={value}>
                {value}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Your Name/Firm Name"
            required
            className="border rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            pattern="^[A-Za-z\s]+$"
            title="Only letters and spaces are allowed. No numbers or special characters."
          />
          <input
            type="tel"
            placeholder="Your Contact No."
            required
            className="border rounded px-3 py-2"
            value={contact}
            pattern="[6-9]{1}[0-9]{9}"
            maxLength={10}
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            required
            className="border rounded px-3 py-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button type="submit" variant="default">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
