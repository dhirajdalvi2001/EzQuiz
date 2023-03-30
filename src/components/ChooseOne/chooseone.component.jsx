import React from "react";
import { useNavigate } from "react-router-dom";
import "./chooseone.styles.css";

function ChooseOne() {
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate("/");
  };
  const redirectCreateQuiz = () => {
    navigate("/create-quiz");
  };
  const redirectCheckOutQuizzes = () => {
    navigate("/check-out-quizzes");
  };
  return (
    <div id="choose-one">
      <div className="background-image"></div>
      <div className="header-logo">
        <h1 onClick={redirectHome}>EzQuiz</h1>
      </div>
      <div className="question">
        <h3>
          Create your own quiz and share them with your friends to test them
        </h3>
        <button className="button" onClick={redirectCreateQuiz}>
          Create a new Quiz
        </button>
        <button className="button" onClick={redirectCheckOutQuizzes}>
          Check out Quizzes
        </button>
      </div>
    </div>
  );
}

export default ChooseOne;
