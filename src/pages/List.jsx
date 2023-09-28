import React from "react";
import { useNavigate } from "react-router-dom";

function List() {
  const navigate = useNavigate();
  const handleClick = async (event) => {
    event.preventDefault();
    navigate("/otp");
  };
  return (
    <>
      <div className="docList">
        <div className="doc" onClick={handleClick}>
          <img
            src="https://th.bing.com/th/id/OIP.Va0mrHRhI1yK6mOlNR-VcAHaFj?pid=ImgDet&rs=1"
            alt=""
          />

          <h2>Dr. Shah Rukh Khan</h2>
          <div className="des">
            <h4>Timings:</h4>
            <p>11:00 AM - 05:00 PM</p>
          </div>
        </div>
        <div className="doc">
          <img
            src="https://th.bing.com/th/id/OIP.4fuT13s2DrQ6shjFqA0FGQHaJR?pid=ImgDet&rs=1"
            alt=""
          />

          <h2>Dr. Aliaaaa Bhatttt </h2>
          <div className="des">
            <h4>Timings:</h4>
            <p>11:00 AM - 05:00 PM</p>
          </div>
        </div>
        <div className="doc">
          <img
            src="https://www.celebface.in/wp-content/uploads/2020/10/Akshay-Kumar.jpeg"
            alt=""
          />

          <h2>Dr. Akshaaay Kumar</h2>
          <div className="des">
            <h4>Timings:</h4>
            <p>11:00 AM - 05:00 PM</p>
          </div>
        </div>
        <div className="doc">
          <img
            src="https://1.bp.blogspot.com/-iPb8Xs0Jo5I/T99edmYHzuI/AAAAAAAAG94/J5apQQ40i8M/s1600/Manoj+Bajpai+in+Gangs+Of+Wasseypur+Movie+HD+Wallpapers+on+bollybuzz+(4).JPG"
            alt=""
          />

          <h2>Dr. Manojj Bajpaye</h2>
          <div className="des">
            <h4>Timings:</h4>
            <p>11:00 AM - 05:00 PM</p>
          </div>
        </div>
        <div className="doc">
          <img
            src="https://th.bing.com/th/id/OIP.8gwuuz0W2lIVOQ9qfeh2WgHaJR?pid=ImgDet&rs=1"
            alt=""
          />

          <h2>Dr. Saksham Gupta</h2>
          <div className="des">
            <h4>Timings:</h4>
            <p>11:00 AM - 05:00 PM</p>
          </div>
        </div>
        <div className="doc">
          <img
            src="https://th.bing.com/th/id/OIP.8gwuuz0W2lIVOQ9qfeh2WgHaJR?pid=ImgDet&rs=1"
            alt=""
          />

          <h2>Dr. Anand Pandey</h2>
          <div className="des">
            <h4>Timings:</h4>
            <p>11:00 AM - 05:00 PM</p>
          </div>
        </div>
        <div className="doc">
          <img
            src="https://hauteliving.com/hautebeauty/wp-content/uploads/2021/07/shutterstock_485395711.jpg"
            alt=""
          />

          <h2>Dr. Priyanka Chopra</h2>
          <div className="des">
            <h4>Timings:</h4>
            <p>11:00 AM - 05:00 PM</p>
          </div>
        </div>
        <div className="doc">
          <img
            src="https://th.bing.com/th/id/R.94c99a92846c3440edda71685522924f?rik=AvN7Zzm0toLTgA&riu=http%3a%2f%2fidlebrain.com%2fmovie%2fphotogallery%2fanushka112%2fimages%2fanushka14.jpg&ehk=B7ab%2br4WqBuEsSdS6viYCJ%2ffyAGJFMT%2bOdN7PYACoeY%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />

          <h2>Dr. Anushka Singh</h2>
          <div className="des">
            <h4>Timings:</h4>
            <p>11:00 AM - 05:00 PM</p>
          </div>
        </div>
        <div className="doc">
          <img
            src="https://th.bing.com/th/id/OIP.8gwuuz0W2lIVOQ9qfeh2WgHaJR?pid=ImgDet&rs=1"
            alt=""
          />

          <h2>Dr. Anand Pandey</h2>
          <div className="des">
            <h4>Timings:</h4>
            <p>11:00 AM - 05:00 PM</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
