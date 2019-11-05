import React from "react";
import "./App.scss";
import IntroBody from "./components/IntroBody/IntroBody";
import FullLanding from "./components/FullLanding/FullLanding";

function App() {
  return (
    <div className="App">
      <FullLanding />
      <IntroBody />
    </div>
  );
}

export default App;
