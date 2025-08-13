import React from "react";
import { Calendar, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50 pt-16 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-sky-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-sky-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Health, Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">
                  {" "}
                  Priority
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience world-class medical care with our team of expert
                doctors. Book appointments instantly and get the care you
                deserve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={"/home"}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-full hover:from-sky-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg font-semibold"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment Now</span>
              </Link>
              
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-sky-100 rounded-lg mx-auto mb-2">
                  <Users className="h-6 w-6 text-sky-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-lg mx-auto mb-2">
                  <Shield className="h-6 w-6 text-cyan-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-sky-100 rounded-lg mx-auto mb-2">
                  <Clock className="h-6 w-6 text-sky-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-lg mx-auto mb-2">
                  <Calendar className="h-6 w-6 text-cyan-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical professionals providing care"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Online Now
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-sky-500">4.9★</div>
                <div className="text-sm text-gray-600">Patient Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
