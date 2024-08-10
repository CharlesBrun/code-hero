import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CharacterProvider } from "./context/Character";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <CharacterProvider>
          <Routes>
            <Route path={"/"} element={<Home />} />
          </Routes>
        </CharacterProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
