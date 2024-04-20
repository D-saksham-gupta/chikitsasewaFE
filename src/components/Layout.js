import React, { useState } from "react";
import "../layout.css";
import Logo from "../components/Healthcare-PNG-HD (1).png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import { Badge } from "antd";
function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-4-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-list-3-line",
    },
    {
      name: "Apply for a Doctor Account",
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
      path: "/",
      icon: "ri-home-4-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
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
      path: "/",
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

  const role = user?.isAdmin
    ? "Hello Admin"
    : user?.isDoctor
    ? "Hello Doctor"
    : "Get 50% discount on your first appointment";
  return (
    <div className="main">
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
                  navigate("/login");
                }, 1000);
              }}
            >
              <i className="ri-logout-box-r-line"></i>
              {!collapsed && <Link to="/login">Logout</Link>}
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
    </div>
  );
}

export default Layout;
