import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import axios from "axios";
import { Button, Col, DatePicker, Row, TimePicker } from "antd";
import moment from "moment";
import toast from "react-hot-toast";

function BookAppointment() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [time, setTime] = useState([]);
  const [date, setDate] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const params = useParams();
  const getDoctorData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/doctor/get-doctor-info-by-id",
        {
          doctorId: params.doctorId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());

      if (response.data.success) {
        setDoctor(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getDoctorData();
  }, []);

  const bookNow = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctor,
          userInfo: user,
          date: date,
          time: time,
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
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(hideLoading());
    }
  };
  return (
    <Layout>
      {doctor && (
        <div className="page-title">
          {doctor.firstName} {doctor.lastName}
        </div>
      )}
      {/* <p>Senior {doctor.specialization}</p> */}

      <hr />

      <Row>
        <Col span={12} sm={24} xs={24} lg={8}>
          <p className="title">
            <b>Timings: </b>10 to 5
          </p>
          <div className="d-flex flex-column">
            <DatePicker
              format="DD/MM/YYYY"
              onChange={(value) => setDate(moment(value).format("DD-MM-YYYY"))}
            />
            <TimePicker
              format="HH:mm"
              className="mt-3"
              onChange={(values) => {
                setTime(moment(values).format("HH:mm"));
              }}
            />
            <Button className="primary-btn mt-3 my-3">
              Check Availability
            </Button>
            <Button className="primary-btn mt-3 my-3" onClick={bookNow}>
              Book Appointment
            </Button>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default BookAppointment;
