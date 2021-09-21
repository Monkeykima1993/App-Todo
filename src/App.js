import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppSwitch from "./components/routers/AppSwitch";

function App() {
  return (
    <Router>
      <div className='App'>
        <AppSwitch />
      </div>
    </Router>
  );
}

export default App;
