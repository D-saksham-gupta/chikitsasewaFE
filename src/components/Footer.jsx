import React from "react";
import {
  Stethoscope,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

const Footer = () => {
  const services = [
    "General Medicine",
    "Cardiology",
    "Dermatology",
    "Pediatrics",
    "Orthopedics",
    "Neurology",
  ];

  const quickLinks = [
    "About Us",
    "Our Doctors",
    "Appointments",
    "Services",
    "Patient Portal",
    "Contact",
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Patient Rights",
    "Insurance",
    "Billing",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-sky-400" />
              <span className="text-xl font-bold">MediCare Pro</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing exceptional healthcare services with compassion,
              expertise, and cutting-edge medical technology for over 15 years.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-sky-600 hover:bg-sky-700 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-sky-600 hover:bg-sky-700 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-sky-600 hover:bg-sky-700 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-sky-600 hover:bg-sky-700 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-sky-400 transition-colors text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-sky-400 transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sky-400 mt-1" />
                <div>
                  <p className="text-gray-300">123 Medical Center Dr</p>
                  <p className="text-gray-300">Health City, HC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sky-400" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sky-400" />
                <p className="text-gray-300">info@mediccarepro.com</p>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-900/30 border border-red-700/50 p-4 rounded-lg mt-6">
              <p className="text-red-300 text-sm font-medium">
                Emergency: Call 911
              </p>
              <p className="text-red-400 text-xs">
                For life-threatening emergencies
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {legalLinks.map((link, index) => (
                <button
                  key={index}
                  className="text-sm text-gray-400 hover:text-sky-400 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for better healthcare</span>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2024 MediCare Pro. All rights reserved. | Licensed Healthcare
              Provider
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
