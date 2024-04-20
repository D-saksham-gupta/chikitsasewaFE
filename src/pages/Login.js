import { Button, Form, Input } from "antd";
import React from "react";
import Logo from "../components/Healthcare-PNG-HD (1).png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        setTimeout(() => {
          navigate("/");
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
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Login to Chikitsa Sewa</h1>
        <img src={Logo} alt="" />

        <Form layout="vertical" onFinish={onFinish} className="formm">
          <Form.Item name="email">
            <Input placeholder="Email" type="email" />
          </Form.Item>
          <Form.Item name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <Button className="primary-button my-3 d-flex" htmlType="submit">
            Login
          </Button>
          <span className="span">
            Don't have an account ?...
            <Link to="/register" className="anchor">
              Create.
            </Link>
          </span>
        </Form>
      </div>
    </div>
  );
}

export default Login;
