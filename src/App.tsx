import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CharacterProvider } from "./context/Character";
import Details from "./pages/Detail";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <CharacterProvider>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/detalhes"} element={<Details />} />
          </Routes>
        </CharacterProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
