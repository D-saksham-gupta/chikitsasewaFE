import React from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "../components/Layout";
import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import moment from "moment";
// import { useDispatch, useSelector } from "react-redux";
// import { hideLoading, showLoading } from "../redux/alertsSlice";
// import axios from "axios";
// import toast from "react-hot-toast";

function DoctorForm({ onFinish, initialValues }) {
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        ...initialValues,
        ...(initialValues && {
          timings: [
            moment(initialValues?.timings[0], "HH"),
            moment(initialValues?.timings[1], "HH"),
          ],
        }),
      }}
    >
      <h2 className="card-title mt-2 my-2 mx-2">Personal Info.</h2>
      <Row gutter={25}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="First Name"
            name="firstName"
            rules={[{ required: true }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Last Name"
            name="lastName"
            rules={[{ required: true }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Phone Number:"
            name="phoneNumber"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter your Phone Number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Website:"
            name="website"
            rules={[{ required: true }]}
          >
            <Input placeholder="www.xyz.com" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Address:"
            name="address"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter your Address" />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <h2 className="card-title mt-3 my-3 mx-2">Professional Info.</h2>
      <Row gutter={25}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Specialization"
            name="specialization"
            rules={[{ required: true }]}
          >
            <Input placeholder="Specialization" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Experience"
            name="experience"
            rules={[{ required: true }]}
          >
            <Input placeholder="Experience" type="number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Fees:"
            name="feePerConsultation"
            rules={[{ required: true }]}
          >
            <Input placeholder="Fees" type="number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Timings"
            name="timings"
            rules={[{ required: true }]}
          >
            <TimePicker.RangePicker format="HH" />
          </Form.Item>
        </Col>
      </Row>

      <div
        className="d-flex justify-content-end"
        style={{ width: "max-content" }}
      >
        <Button className="primary-button d-flex dbtn" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default DoctorForm;
