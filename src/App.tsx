import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/auth";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path={"/"} element={<Home />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
