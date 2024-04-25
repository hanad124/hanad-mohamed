import "./App.css";

// ** React imports ***

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
