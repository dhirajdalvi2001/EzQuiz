import React from "react";
import { useNavigate } from "react-router-dom";
import "./checkoutquizzes.styles.css";

function CheckOutQuizzes() {
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate("/");
  };
  return (
    <div id="check-out-quizzes">
      <div className="background-image"></div>
      <div className="header-logo">
        <h1 onClick={redirectHome}>EzQuiz</h1>
      </div>
      <div className="title">
        <h3>Check out these quizzes made by our users</h3>
      </div>
    </div>
  );
}

export default CheckOutQuizzes;
