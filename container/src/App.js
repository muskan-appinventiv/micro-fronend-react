import React, { Suspense } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Header = React.lazy(() => import("layout/Header"))
const Footer = React.lazy(() => import("layout/Footer"))
const Recipes = React.lazy(() => import("recipies/Recipes"))
const Recipe = React.lazy(() => import("recipies/Recipe"))
// import Header from "layout/Header";
// import Footer from "layout/Footer";
// import Recipes from "pages/Recipes";
// import Recipe from "pages/Recipe";

const App = () => (
  <div >
    <Suspense fallback={<>Loading...</>}>
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/recipes/:slug" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    <Footer />
    </Suspense>
  </div>
);
export default App;