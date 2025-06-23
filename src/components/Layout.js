import React, { useState } from "react";
import "../layout.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import { Menu, Bell, LogOut, Stethoscope, User, X } from "lucide-react";
function Layout({ children }) {
  // const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userMenu = [
    {
      name: "Home",
      path: "/home",
      icon: "ri-home-4-line",
    },
    {
      name: "Appointments",
      // path: "/appointments",
      icon: "ri-file-list-3-line",
    },
    {
      name: "Get Doctor Account",
      path: "/apply-doctor",
      icon: "ri-hospital-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-user-line",
    },
  ];

  //doctor menu
  const doctorMenu = [
    {
      name: "Home",
      path: "/home",
      icon: "ri-home-4-line",
    },
    {
      name: "Appointments",
      // path: "/appointments",
      icon: "ri-file-list-3-line",
    },

    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "ri-user-line",
    },
  ];
  const adminMenu = [
    {
      name: "Home",
      path: "/home",
      icon: "ri-home-4-fill",
    },

    {
      name: "Users",
      path: "/admin/userslist",
      icon: "ri-user-fill",
    },
    {
      name: "Doctors",
      path: "/admin/doctorslist",
      icon: "ri-nurse-fill",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-user-fill",
    },
  ];
  const onClick = () => {
    setTimeout(() => {
      dispatch(showLoading());
    }, 0);
    setTimeout(() => {
      dispatch(hideLoading());
    }, 500);
  };

  const menuToBeRendered = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;

  const role = user?.isAdmin ? "Admin" : user?.isDoctor ? "Doctor" : "Patient";
  return (
    <>
      {/* <div className="main">
      <div className="d-flex layout">
        <div className={`${collapsed ? `collapsed-sidebar` : `sidebar`}`}>
          <div className="sidebar-header">
            <img src={Logo} alt="" />
          </div>
          <div className="menu">
            {menuToBeRendered.map((menu) => {
              return (
                <div className="d-flex menu-item">
                  <i className={menu.icon}></i>

                  {!collapsed && (
                    <Link onClick={onClick} to={menu.path}>
                      {menu.name}
                    </Link>
                  )}
                </div>
              );
            })}
            <div
              className="d-flex menu-item"
              onClick={() => {
                setTimeout(() => {
                  dispatch(showLoading());
                }, 0);
                setTimeout(() => {
                  dispatch(hideLoading());
                  localStorage.clear();
                  navigate("/");
                }, 1000);
              }}
            >
              <i className="ri-logout-box-r-line"></i>
              {!collapsed && <Link to="/">Logout</Link>}
            </div>
          </div>
        </div>

        <div className="content">
          <div className="header">
            <i
              className="ri-menu-2-line ham-icon"
              onClick={() => setCollapsed(!collapsed)}
            ></i>
            <h2 className="card-title mq">{role}</h2>
            <div className="d-flex align-items-center">
              <Badge count={user?.unseenNotifications.length}>
                <i
                  className="ri-notification-3-fill ham-icon mx-1"
                  onClick={() => navigate("/notifications")}
                ></i>
              </Badge>
              <Link className="anchor mx-3" to="/profile">
                {user?.name}
              </Link>
            </div>
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div> */}

      {/* ------------------------------------------- */}

      <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center space-x-2"
            >
              <Stethoscope className="h-8 w-8 text-sky-500" />
              <span className="text-xl font-bold text-gray-800">
                Chikitsa Sewa
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuToBeRendered.map((menu) => (
                <Link
                  key={menu.id}
                  onClick={onClick}
                  to={menu.path}
                  className={
                    "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg"
                  }
                >
                  <i className={menu.icon} />
                  <span>{menu.name}</span>
                </Link>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Notifications */}
              <button
                onClick={() => navigate("/notifications")}
                className="relative p-2 text-gray-700 hover:text-sky-500 transition-colors"
              >
                <Bell className="h-6 w-6" />
                {user?.unseenNotifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {user?.unseenNotifications.length}
                  </span>
                )}
              </button>

              {/* User Profile */}
              <div
                className="flex items-center space-x-3"
                // onClick={() => navigate("/profile")}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">{user?.name}</div>
                  <div className="text-gray-500">{role}</div>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={() => {
                  setTimeout(() => {
                    dispatch(showLoading());
                  }, 0);
                  setTimeout(() => {
                    dispatch(hideLoading());
                    localStorage.clear();
                    navigate("/");
                  }, 1000);
                }}
                className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
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
            <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 mx-4 p-4 border border-gray-200">
              <div className="space-y-3">
                {/* User Info */}
                <div className="flex items-center space-x-3 pb-3 border-b border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {user?.name}
                    </div>
                    <div className="text-sm text-gray-500">{role}</div>
                  </div>
                  <button
                    onClick={() => navigate("/notifications")}
                    className="ml-auto relative p-2 text-gray-700 hover:text-sky-500 transition-colors"
                  >
                    <Bell className="h-5 w-5" />
                    {user?.unseenNotifications.length > 0 && (
                      <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {user?.unseenNotifications.length}
                      </span>
                    )}
                  </button>
                </div>

                {/* Navigation Items */}
                {menuToBeRendered.map((menu) => (
                  <Link
                    key={menu.id}
                    to={menu.path}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 font-medium 
                        bg-gradient-to-r from-sky-500 to-cyan-400 text-white`}
                  >
                    <menu.icon className="h-5 w-5" />
                    <span>{menu.name}</span>
                  </Link>
                ))}

                {/* Logout */}
                <button
                  onClick={() => {
                    setTimeout(() => {
                      dispatch(showLoading());
                    }, 0);
                    setTimeout(() => {
                      dispatch(hideLoading());
                      localStorage.clear();
                      navigate("/");
                    }, 1000);
                  }}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300 font-medium"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="body">{children}</div>
    </>
  );
}

export default Layout;
