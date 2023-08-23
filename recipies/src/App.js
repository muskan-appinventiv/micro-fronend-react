import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Recipes from "./Recipes";
import Recipe from "./Recipe";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/recipes/:slug" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
