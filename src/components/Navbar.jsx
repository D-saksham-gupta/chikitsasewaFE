import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Stethoscope,
  Calendar,
  LogIn,
  User as UserMd,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-sky-500" />
            <span className="text-xl font-bold text-gray-800">
              Chikitsa Sewa
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate("/home")}
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-full hover:from-sky-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Calendar className="h-4 w-4" />
              {user?.isDoctor ? (
                <span>Go to Dashboard</span>
              ) : (
                <span>Book Appointment</span>
              )}
            </button>
            {!localStorage.getItem("token") && (
              <button
                onClick={() => navigate("/login")}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-sky-500 transition-colors"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-sky-500 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 mx-4 p-4">
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-gray-700 hover:text-sky-500 transition-colors font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-gray-700 hover:text-sky-500 transition-colors font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left text-gray-700 hover:text-sky-500 transition-colors font-medium py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-gray-700 hover:text-sky-500 transition-colors font-medium py-2"
              >
                Contact
              </button>
              <div className="border-t pt-3 space-y-2">
                <button
                  onClick={() => navigate("/home")}
                  className="flex items-center space-x-2 w-full px-4 py-2 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-lg"
                >
                  <Calendar className="h-4 w-4" />
                  {user?.isDoctor ? (
                    <span>Dashboard</span>
                  ) : (
                    <span>Book Appointment</span>
                  )}
                </button>
                {!localStorage.getItem("token") && (
                  <button
                    onClick={() => navigate("/login")}
                    className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:text-sky-500 transition-colors"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
