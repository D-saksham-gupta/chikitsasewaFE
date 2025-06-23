import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Doctor from "../components/Doctor";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import { Clock, Filter, MapPin, Search, Star, Stethoscope } from "lucide-react";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get(
        "https://chikitsa-sewa-backend.onrender.com/api/user/get-all-approved-doctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };
  const getUserData = async () => {
    try {
      const response = await axios.get(
        "https://chikitsa-sewa-backend.onrender.com/api/user/get-user-info-by-id",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getUserData();
  }, [user.unseenNotifications]);
  const specialties = [
    "All Specialties",
    "Cardiologist",
    "Dermatologist",
    "Pediatrician",
    "Orthopedic Surgeon",
    "Neurologist",
    "Psychiatrist",
    "Dentist",
    "Gynacologist",
  ];
  const locations = [
    "All Locations",
    "Agartala",
    "Ahmedabad",
    "Aizawl",
    "Amritsar",
    "Anantnag",
    "Asansol",
    "Aurangabad",
    "Bengaluru",
    "Bhagalpur",
    "Bhopal",
    "Bhubaneswar",
    "Bilaspur",
    "Bokaro",
    "Chandigarh",
    "Chennai",
    "Churachandpur",
    "Coimbatore",
    "Cuttack",
    "Daman",
    "Dhanbad",
    "Dibrugarh",
    "Dimapur",
    "Diu",
    "Durg",
    "Durgapur",
    "Faridabad",
    "Gangtok",
    "Gaya",
    "Guntur",
    "Guwahati",
    "Gwalior",
    "Haridwar",
    "Hubballi",
    "Hyderabad",
    "Imphal",
    "Indore",
    "Itanagar",
    "Jabalpur",
    "Jaipur",
    "Jalandhar",
    "Jammu",
    "Jamnagar",
    "Jamshedpur",
    "Jhansi",
    "Jodhpur",
    "Jorhat",
    "Kanpur",
    "Karimnagar",
    "Karaikal",
    "Kargil",
    "Kavaratti",
    "Kochi",
    "Kohima",
    "Kollam",
    "Kolkata",
    "Korba",
    "Kota",
    "Kozhikode",
    "Leh",
    "Lucknow",
    "Ludhiana",
    "Lunglei",
    "Madurai",
    "Mahe",
    "Mangaluru",
    "Manali",
    "Mapusa",
    "Margao",
    "Mumbai",
    "Muzaffarpur",
    "Mysuru",
    "Naharlagun",
    "Nainital",
    "Nashik",
    "Nellore",
    "New Delhi",
    "Nizamabad",
    "Noida",
    "Panaji",
    "Panipat",
    "Pasighat",
    "Patiala",
    "Patna",
    "Port Blair",
    "Puducherry",
    "Pune",
    "Raipur",
    "Rajkot",
    "Ranchi",
    "Rohtak",
    "Rourkela",
    "Sambalpur",
    "Shimla",
    "Shillong",
    "Silchar",
    "Siliguri",
    "Silvassa",
    "Srinagar",
    "Solan",
    "Srikakulam",
    "Surat",
    "Tawang",
    "Thiruvananthapuram",
    "Thoubal",
    "Tiruchirappalli",
    "Tirupati",
    "Tura",
    "Udaipur",
    "Vadodara",
    "Varanasi",
    "Vasco da Gama",
    "Vijayawada",
    "Visakhapatnam",
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "" ||
      selectedSpecialty === "All Specialties" ||
      doctor.specialization === selectedSpecialty;
    const matchesLocation =
      selectedLocation === "" ||
      selectedLocation === "All Locations" ||
      doctor.address.includes(selectedLocation);

    return matchesSearch && matchesSpecialty && matchesLocation;
  });
  return (
    <Layout>
      {/* <Row gutter={20}>
        
        {doctors.map((doctor) => (
          <Col span={9} xs={24} sm={24} lg={8}>
            <Doctor doctor={doctor} />
          </Col>
        ))}
      </Row> */}

      {/* --------------------------------- */}
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50">
        {/* <DashboardNavbar onNavigate={onNavigate} currentPage="home" /> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">
                Perfect Doctor
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse through our network of qualified healthcare professionals
              and book your appointment today.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-8 border border-white/20">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search doctors or specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Specialty Filter */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Stethoscope className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 appearance-none"
                >
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 appearance-none"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter Button */}
              <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-xl hover:from-sky-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Filter className="h-5 w-5" />
                <span>Advanced Filters</span>
              </button>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Available Doctors ({filteredDoctors.length})
              </h2>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>Updated 5 minutes ago</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">
                Showing top-rated doctors
              </span>
            </div>
          </div>

          {/* Doctors Grid */}
          {filteredDoctors.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <Doctor key={doctor.userId} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No doctors found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or filters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSpecialty("");
                  setSelectedLocation("");
                }}
                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-xl hover:from-sky-600 hover:to-cyan-500 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
