import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.styles.css";

function Home() {
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate("/");
  };
  const redirectChooseOn = () => {
    navigate("/choose-one");
  };
  return (
    <div id="home-page">
      <div className="background-image"></div>
      <div className="header-logo">
        <h1 onClick={redirectHome}>EzQuiz</h1>
      </div>
      <div className="tag-line">
        <h3>
          Create your own quiz and share them with your friends to test them
        </h3>
        <button className="button" onClick={redirectChooseOn}>
          Get Started!
        </button>
      </div>
    </div>
  );
}

export default Home;
