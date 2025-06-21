import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import { hideLoading, showLoading } from "../redux/alertsSlice";
function ProtectedRoute(props) {
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/get-user-info-by-id",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());

      if (response.data.success) {
        dispatch(setUser(response.data.data));
      } else {
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      localStorage.clear();
      navigate("/login");
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  if (!user) {
    return null; // or a loading spinner
  }

  return props.children;
}

export default ProtectedRoute;
