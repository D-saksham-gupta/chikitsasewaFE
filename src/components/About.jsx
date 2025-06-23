import React from "react";
import { Heart, Award, Users, Stethoscope, Clock, MapPin } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We provide empathetic and personalized medical care tailored to each patient's unique needs.",
    },
    {
      icon: Award,
      title: "Excellence in Medicine",
      description:
        "Our team consists of board-certified specialists with years of experience in their respective fields.",
    },
    {
      icon: Users,
      title: "Patient-Centered Approach",
      description:
        "Your health and comfort are our top priorities, ensuring a positive healthcare experience.",
    },
    {
      icon: Stethoscope,
      title: "Advanced Technology",
      description:
        "We utilize cutting-edge medical equipment and modern treatment methodologies.",
    },
    {
      icon: Clock,
      title: "Convenient Scheduling",
      description:
        "Easy online booking system with flexible appointment times to fit your busy schedule.",
    },
    {
      icon: MapPin,
      title: "Multiple Locations",
      description:
        "Conveniently located clinics across the city for easy access to quality healthcare.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">
              Chikitsa Sewa
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to providing exceptional healthcare services with a
            commitment to excellence, compassion, and innovation in medical
            care.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Transforming Healthcare Experience
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 15 years of excellence in healthcare, Chikitsa Sewa has
              been at the forefront of medical innovation, providing
              comprehensive healthcare solutions that prioritize patient
              wellness and satisfaction.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our state-of-the-art facilities, combined with a team of highly
              qualified medical professionals, ensure that you receive the best
              possible care in a comfortable and welcoming environment.
            </p>
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-500">50,000+</div>
                <div className="text-gray-600">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-500">100+</div>
                <div className="text-gray-600">Medical Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-500">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern medical facility"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
