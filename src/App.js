import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import IntroBody from "./components/IntroBody/IntroBody";
import FullLanding from "./components/FullLanding/FullLanding";

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Header /> */}
      <FullLanding />
      <IntroBody />
    </div>
  );
}

export default App;
