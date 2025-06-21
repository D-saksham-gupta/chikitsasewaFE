import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The care I received at MediCare Pro was exceptional. The doctors were thorough, compassionate, and truly listened to my concerns. The online booking system made scheduling so convenient!",
    },
    {
      name: "Michael Chen",
      role: "Patient",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "I've been a patient for over 3 years now, and the level of professionalism and care has been consistently outstanding. They've helped me manage my health effectively.",
    },
    {
      name: "Emily Rodriguez",
      role: "Patient",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The facilities are modern and clean, and the staff is incredibly friendly. I felt comfortable throughout my entire visit. Highly recommend MediCare Pro to anyone seeking quality healthcare.",
    },
    {
      name: "David Thompson",
      role: "Patient",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The telemedicine services were a game-changer for me. Being able to consult with my doctor from home saved me time and provided the same quality care I'd expect in person.",
    },
    {
      name: "Lisa Williams",
      role: "Patient",
      image:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Dr. Martinez and her team provided excellent care during my pregnancy. Their attention to detail and compassionate approach made all the difference during this important time.",
    },
    {
      name: "Robert Kim",
      role: "Patient",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The preventive care program helped me identify health issues early. The comprehensive approach to healthcare here is truly impressive. Thank you for keeping me healthy!",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-sky-50 via-white to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">
              Patients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our patients have to
            say about their experience with MediCare Pro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full flex items-center justify-center">
                <Quote className="h-4 w-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Patient Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-sky-500 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-500 mb-2">2,500+</div>
            <div className="text-gray-600">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-sky-500 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-500 mb-2">24hr</div>
            <div className="text-gray-600">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
