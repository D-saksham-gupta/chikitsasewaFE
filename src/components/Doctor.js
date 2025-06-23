import { Calendar, Clock, IndianRupee, MapPin, Phone } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    // <div
    //   className="card p-2 my-2 cursor"
    //   onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    // >
    //   <h4 className="card-title ct">
    //     Dr. {doctor.firstName} {doctor.lastName}
    //   </h4>
    //   <hr />
    //   <p>
    //     <b>
    //       Sr. {doctor.specialization} (Experience: {doctor.experience} years+)
    //     </b>
    //   </p>
    //   <p className="card-text">
    //     <b>Phone Number: </b>
    //     {doctor.phoneNumber}
    //   </p>
    //   <p className="card-text">
    //     <b>Address: </b>
    //     {doctor.address}
    //   </p>
    //   <p className="card-text">
    //     <b>Fees per visit: </b>
    //     {doctor.feePerConsultation}
    //   </p>
    //   <p className="card-text">
    //     <b>Timings: </b>
    //     10 AM to 5 PM
    //   </p>
    // </div>

    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Doctor Image & Status */}
      {/* <div className="relative">
        <img 
          src={doctor.image} 
          alt={doctor.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            doctor.isAvailable 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {doctor.isAvailable ? 'Available' : 'Busy'}
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
            {renderStars(doctor.rating)}
            <span className="text-sm font-medium text-gray-700 ml-1">{doctor.rating}</span>
          </div>
        </div>
      </div> */}

      {/* Doctor Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            Dr. {doctor.firstName} {doctor.lastName}
          </h3>
          <p className="text-sky-600 font-medium">{doctor.specialization}</p>
          <p className="text-sm text-gray-500">
            {doctor.experience} years experience
          </p>
        </div>

        {/* Details Grid */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3 text-sm">
            <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <span className="text-gray-600">{doctor.address}</span>
          </div>

          <div className="flex items-center space-x-3 text-sm">
            <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <span className="text-gray-600">{doctor.phoneNumber}</span>
          </div>

          <div className="flex items-center space-x-3 text-sm">
            <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <span className="text-gray-600">10 AM to 5 PM</span>
          </div>

          <div className="flex items-center space-x-3 text-sm">
            <IndianRupee className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <span className="text-gray-600">
              Consultation Fee: ₹{doctor.feePerConsultation}
            </span>
          </div>
        </div>

        {/* Languages */}
        {/* <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {doctor.languages.map((language, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-sky-50 text-sky-700 text-xs rounded-full border border-sky-200"
              >
                {language}
              </span>
            ))}
          </div>
        </div> */}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={() => navigate(`/book-appointment/${doctor._id}`)}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-xl hover:from-sky-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Calendar className="h-4 w-4" />
            <span className="font-medium">Book Now</span>
          </button>
          {/* <button className="px-4 py-3 border-2 border-sky-500 text-sky-500 rounded-xl hover:bg-sky-500 hover:text-white transition-all duration-300 font-medium">
            View Profile
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Doctor;
