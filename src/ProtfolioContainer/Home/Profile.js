import React from "react";
import Typical from "react-typical";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-github"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M <span className="highlighted-text">Simanta</span>
            </span>
          </div>
          <div className="profile-details-role">
            <div className="primary-text">
              <h1>
                {""}
                <Typical
                  steps={[
                    "Simanta",
                    1500,
                    "Full stack Developer",
                    1500,
                    "MERN Stack Dev",
                    1500,
                    "REACT DEV",
                    1500,
                  ]}
                  loop={Infinity}
                />
              </h1>
              <div className="profile-role-tagline">
                Hire me to Help your next project.
              </div>
            </div>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <button className="btn highlighted-btn">Get Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
