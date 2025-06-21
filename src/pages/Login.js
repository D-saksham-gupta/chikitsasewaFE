import { Form } from "antd";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Shield,
  Stethoscope,
  User,
} from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState("patient"); // 'patient' or 'doctor'

  const onBack = () => {
    navigate("/");
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "https://chikitsa-sewa-backend.onrender.com/api/user/login",
        values
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        setTimeout(() => {
          navigate("/home");
          toast("Welcome to Chikitsa Sewa");
        }, [1000]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };
  return (
    // <div className="authentication">
    //   <div className="authentication-form card p-3">
    //     <h1 className="card-title">Login to Chikitsa Sewa</h1>
    //     <img src={Logo} alt="" />

    //     <Form layout="vertical" onFinish={onFinish} className="formm">
    //       <Form.Item name="email">
    //         <Input placeholder="Email" type="email" />
    //       </Form.Item>
    //       <Form.Item name="password">
    //         <Input placeholder="Password" type="password" />
    //       </Form.Item>
    //       <Button className="primary-button my-3 d-flex" htmlType="submit">
    //         Login
    //       </Button>
    //       <span className="span">
    //         Don't have an account ?...
    //         <Link to="/register" className="anchor">
    //           Create.
    //         </Link>
    //       </span>
    //     </Form>
    //   </div>
    // </div>
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-sky-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-sky-300 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-cyan-300 rounded-full"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-sky-500 transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
        )}

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-sky-500" />
              <span className="text-2xl font-bold text-gray-800">
                MediCare Pro
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to access your account</p>
          </div>

          {/* Login Type Toggle */}
          <div className="flex bg-gray-100 rounded-2xl p-1 mb-8">
            <button
              onClick={() => setLoginType("patient")}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl transition-all duration-300 ${
                loginType === "patient"
                  ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <User className="h-4 w-4" />
              <span className="font-medium">Patient</span>
            </button>
            <button
              onClick={() => setLoginType("doctor")}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl transition-all duration-300 ${
                loginType === "doctor"
                  ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Shield className="h-4 w-4" />
              <span className="font-medium">Doctor</span>
            </button>
          </div>

          {/* Login Form */}
          <Form layout="vertical" onFinish={onFinish} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Form.Item name="email">
                  <input
                    type="email"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </Form.Item>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Form.Item name="password">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your password"
                  />
                </Form.Item>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              htmlType="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-xl hover:from-sky-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg"
            >
              Sign In as {loginType === "patient" ? "Patient" : "Doctor"}
            </button>
          </Form>

          {/* Sign Up Link */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-sky-500 hover:text-sky-600 transition-colors font-medium"
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            🔒 Your data is protected with enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
