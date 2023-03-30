import { Route, Routes } from "react-router-dom";
import CheckOutQuizzes from "./components/CheckOutQuizzes/checkoutquizzes.component";
import ChooseOne from "./components/ChooseOne/chooseone.component";
import CreateQuiz from "./components/CreateQuiz/createquiz.component";
import Home from "./components/Home/homepage.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/choose-one" element={<ChooseOne />}></Route>
        <Route exact path="/create-quiz" element={<CreateQuiz />}></Route>
        <Route
          exact
          path="/check-out-quizzes"
          element={<CheckOutQuizzes />}
        ></Route>
        <Route path="*" element={<My404Component />} />
      </Routes>
    </div>
  );
}

export default App;

function My404Component() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "1.4rem",
        textTransform: "uppercase",
        color: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <h1>404: Page Not Found</h1>
    </div>
  );
}
