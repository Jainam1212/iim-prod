import { useState } from "react";
import { toast,Toaster } from "sonner";

const ContactForm = () => {
  // Individual state for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // Error states
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  // Validation functions
  const validateName = (name: string) => {
    const nameRegex = /^[a-zA-Z\s]{2,30}$/;
    if (!name.trim()) return "Name is required";
    if (!nameRegex.test(name))
      return "Name should contain only letters and spaces";
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone.trim()) return "Phone number is required";
    if (!phoneRegex.test(phone))
      return "Please enter a valid 10-digit mobile number";
    return "";
  };

  const validateCompany = (company: string) => {
    if (!company.trim()) return "Company name is required";
    if (company.length < 2) return "Company name must be at least 2 characters";
    return "";
  };

  const validateMessage = (message: string) => {
    if (!message.trim()) return "Message is required";
    if (message.length < 10) return "Message must be at least 10 characters";
    return "";
  };

  // Handle input changes with validation
  const handleFirstNameChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setFirstName(value);
    setErrors((prev) => ({
      ...prev,
      firstName: validateName(value),
    }));
  };

  const handleLastNameChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setLastName(value);
    setErrors((prev) => ({
      ...prev,
      lastName: validateName(value),
    }));
  };

  const handleEmailChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({
      ...prev,
      email: validateEmail(value),
    }));
  };

  const handlePhoneChange = (e: { target: { value: string } }) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length <= 10) {
      setPhone(value);
      setErrors((prev) => ({
        ...prev,
        phone: validatePhone(value),
      }));
    }
  };

  const handleCompanyChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setCompany(value);
    setErrors((prev) => ({
      ...prev,
      company: validateCompany(value),
    }));
  };

  const handleMessageChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setMessage(value);
    setErrors((prev) => ({
      ...prev,
      message: validateMessage(value),
    }));
  };
  const handleSubmit = () => {
    // Validate all fields
    const newErrors = {
      firstName: validateName(firstName),
      lastName: validateName(lastName),
      email: validateEmail(email),
      phone: validatePhone(phone),
      company: validateCompany(company),
      message: validateMessage(message),
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      toast.error("Please fix the errors in the form");
      return;
    }

    toast.success("Message sent successfully!");
    // Simple form submission
    console.log("Form Data:", {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
    });

    // Reset form
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-gray-500/10">
            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  className={`w-full px-3 pt-4 pb-2 bg-white/20 backdrop-blur-sm border-2 rounded-lg 
                  transition-all duration-300 outline-none
                  placeholder-gray-500 text-gray-800
                  ${
                    errors.firstName
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 hover:border-gray-400 focus:border-orange-500"
                  } 
                  focus:shadow-lg ${
                    errors.firstName
                      ? "focus:shadow-red-500/20"
                      : "focus:shadow-orange-500/20"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className={`w-full px-3 pt-4 pb-2 bg-white/20 backdrop-blur-sm border-2 rounded-lg 
                  transition-all duration-300 outline-none
                  placeholder-gray-500 text-gray-800
                  ${
                    errors.lastName
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 hover:border-gray-400 focus:border-orange-500"
                  } 
                  focus:shadow-lg ${
                    errors.lastName
                      ? "focus:shadow-red-500/20"
                      : "focus:shadow-orange-500/20"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full px-3 pt-4 pb-2 bg-white/20 backdrop-blur-sm border-2 rounded-lg 
                  transition-all duration-300 outline-none
                  placeholder-gray-500 text-gray-800
                  ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 hover:border-gray-400 focus:border-orange-500"
                  } 
                  focus:shadow-lg ${
                    errors.email
                      ? "focus:shadow-red-500/20"
                      : "focus:shadow-orange-500/20"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number (10 digits)"
                  value={phone}
                  onChange={handlePhoneChange}
                  className={`w-full px-3 pt-4 pb-2 bg-white/20 backdrop-blur-sm border-2 rounded-lg 
                  transition-all duration-300 outline-none
                  placeholder-gray-500 text-gray-800
                  ${
                    errors.phone
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 hover:border-gray-400 focus:border-orange-500"
                  } 
                  focus:shadow-lg ${
                    errors.phone
                      ? "focus:shadow-red-500/20"
                      : "focus:shadow-orange-500/20"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Company Name */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={handleCompanyChange}
                className={`w-full px-3 pt-4 pb-2 bg-white/20 backdrop-blur-sm border-2 rounded-lg 
                transition-all duration-300 outline-none
                placeholder-gray-500 text-gray-800
                ${
                  errors.company
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 hover:border-gray-400 focus:border-orange-500"
                } 
                focus:shadow-lg ${
                  errors.company
                    ? "focus:shadow-red-500/20"
                    : "focus:shadow-orange-500/20"
                }`}
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1">{errors.company}</p>
              )}
            </div>

            {/* Message */}
            <div className="mb-8">
              <textarea
                placeholder="Your Message (minimum 10 characters)"
                value={message}
                onChange={handleMessageChange}
                rows={4}
                className={`w-full px-3 pt-4 pb-2 bg-white/20 backdrop-blur-sm border-2 rounded-lg 
                transition-all duration-300 outline-none resize-none
                placeholder-gray-500 text-gray-800
                ${
                  errors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 hover:border-gray-400 focus:border-orange-500"
                } 
                focus:shadow-lg ${
                  errors.message
                    ? "focus:shadow-red-500/20"
                    : "focus:shadow-orange-500/20"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-8 rounded-lg
              hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300
              shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40
              focus:outline-none focus:ring-4 focus:ring-orange-500/20"
            >
              Send Message
            </button>
          </div>

          <div className="text-center mt-8 text-gray-600">
            <p className="text-sm">
              By submitting this form, you agree to our privacy policy and terms
              of service.
            </p>
          </div>
        </div>
      </div>
      <Toaster richColors position="top-center" />
    </>
  );
};

export default ContactForm;
