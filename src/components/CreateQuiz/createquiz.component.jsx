import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createquiz.styles.css";

function CreateQuiz() {
  const [inputClicked, setInputClicked] = useState(false);
  const [QuizName, setQuizName] = useState(false);
  const [QuizDescription, setQuizDescription] = useState(false);
  const [QuizScore, setQuizScore] = useState(false);
  const [QuizTime, setQuizTime] = useState(false);

  const [values, setValues] = useState({
    QuizName: "",
    QuizDescription: "",
    QuizScore: "",
    QuizTime: "",
  });
  // const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { QuizName, QuizDescription, QuizScore, QuizTime } = values;
    const res = fetch(
      "https://ezquizdd-default-rtdb.firebaseio.com/quizData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify({
          QuizName,
          QuizDescription,
          QuizScore,
          QuizTime,
        }),
      }
    );
    if (res) {
      navigate("/check-out-quizzes");
    }
    setIsSubmitting(true);
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const navigate = useNavigate();
  const redirectHome = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    // console.log(e.target.name);
    setInputClicked(true);
    if (e.target.name === "QuizName" && e.target.value.length > 3) {
      setQuizName(true);
      console.log("QuizName : " + QuizName);
    } else if (
      e.target.name === "QuizDescription" &&
      e.target.value.length > 3
    ) {
      setQuizDescription(true);
      console.log("QuizDescription : " + QuizDescription);
    } else if (e.target.name === "QuizScore") {
      setQuizScore(true);
      console.log("QuizScore : " + QuizScore);
    } else if (e.target.name === "QuizTime") {
      setQuizTime(true);
      console.log("QuizTime : " + QuizTime);
    }
    setTimeout(() => {
      setInputClicked(false);
    }, 2000);
  };
  return (
    <div id="create-quiz">
      <div className="background-image"></div>
      <div className="header-logo">
        <h1 onClick={redirectHome}>EzQuiz</h1>
      </div>
      <div className="title">
        <h3>Start creating your Quiz</h3>
      </div>
      <form action="" onKeyDown={handleKeyPress} onSubmit={handleSubmit}>
        <input
          name="QuizName"
          value={values.QuizName}
          type="text"
          placeholder="Enter the name of your Quiz"
          autoComplete="off"
          onChange={handleChange}
        />
        {QuizName ? (
          <input
            name="QuizDescription"
            value={values.QuizDescription}
            type="text"
            placeholder="Enter a short description about the Quiz"
            autoComplete="off"
            onChange={handleChange}
          />
        ) : (
          <></>
        )}
        {QuizDescription ? (
          <input
            name="QuizScore"
            value={values.QuizScore}
            type="number"
            placeholder="Enter the score per right answer"
            autoComplete="off"
            onChange={handleChange}
          />
        ) : (
          <></>
        )}
        {QuizScore ? (
          <input
            name="QuizTime"
            value={values.QuizTime}
            type="number"
            placeholder="Enter the time limit for the quiz in minutes"
            autoComplete="off"
            onChange={handleChange}
          />
        ) : (
          <></>
        )}
        {QuizTime ? (
          <button className="create-quiz-button">Create Quiz</button>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}

export default CreateQuiz;
