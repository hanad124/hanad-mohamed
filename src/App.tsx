import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);
// ** React imports ***
import * as React from "react";

// ** Thirty party imports ***
import { Route, Routes } from "react-router-dom";

// ** Components imports **
import { Home } from "./pages/index";
function App() {
  return (
    <>
     
      {/* Public routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
