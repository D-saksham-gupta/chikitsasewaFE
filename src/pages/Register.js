import { Button, Form, Input } from "antd";
import React from "react";
import Logo from "../components/Healthcare-PNG-HD (1).png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        setTimeout(async () => {
          navigate("/login");
          toast("Please Login to continue");
        }, [2000]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Become a Chikitsa Sewa Member</h1>
        <img src={Logo} alt="" />

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="name">
            <Input placeholder="Name" type="text" />
          </Form.Item>
          <Form.Item name="email">
            <Input placeholder="Email" type="email" />
          </Form.Item>
          <Form.Item name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          <Button className="primary-button my-2 d-flex" htmlType="submit">
            Create Account
          </Button>
          <span className="span">
            Already have an account ?{" "}
            <Link to="/login" className="anchor">
              Login.
            </Link>
          </span>
        </Form>
      </div>
    </div>
  );
}

export default Register;
