import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <LandingPage />
      </Router>
    </>
  );
}

export default App;
