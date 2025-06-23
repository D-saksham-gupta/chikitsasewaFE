import React from "react";
import { Tabs } from "antd";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";

function Notifications() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const markAllAsSeen = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "https://chikitsa-sewa-backend.onrender.com/api/user/mark-all-notifications-as-seen",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(setUser(response.data.data));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };
  const deleteAll = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "https://chikitsa-sewa-backend.onrender.com/api/user/delete-all-notifications",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(setUser(response.data.data));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <h1 className="p-2 rounded mb-2 text-4xl text-pretty font-semibold h-16 w-16 text-sky-500">
        Notifications
      </h1>

      <Tabs>
        <Tabs.TabPane tab="Unread" key={0}>
          <div className="d-flex justify-content-end">
            <h6 className="anchor1" onClick={() => markAllAsSeen()}>
              Mark all as read
            </h6>
          </div>
          {user?.unseenNotifications.map((notification) => {
            return (
              <div
                className="card p-2 my-3"
                onClick={() => navigate(notification.onClickPath)}
              >
                <div className="card-text">{notification.message}</div>
              </div>
            );
          })}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Read" key={1}>
          <div className="d-flex justify-content-end">
            <h6 className="anchor1" onClick={() => deleteAll()}>
              Delete all Notifications
            </h6>
          </div>
          {user?.seenNotifications.map((notification) => {
            return (
              <div
                className="card p-2 my-3"
                onClick={() => navigate(notification.onClickPath)}
              >
                <div className="card-text">{notification.message}</div>
              </div>
            );
          })}
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
}

export default Notifications;
