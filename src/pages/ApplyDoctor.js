import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
//import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import axios from "axios";
import toast from "react-hot-toast";
import DoctorForm from "../components/DoctorForm";
import moment from "moment";

const ApplyDoctor = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "https://chikitsa-sewa-backend.onrender.com/api/user/apply-doctor-account",
        {
          ...values,
          userId: user._id,
          timings: [
            moment(values.timings[0]).format("HH"),
            moment(values.timings[1]).format("HH"),
          ],
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

        navigate("/");
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
      <h1 className="page-title ">Apply for a Doctor Account</h1>
      <hr />
      <DoctorForm onFinish={onFinish} />
    </Layout>
  );
};

export default ApplyDoctor;
