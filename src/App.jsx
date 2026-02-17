import React, { useState } from "react";
import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Project from "./pages/Projects.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  

  return (
    <div>
    <Header/>
     <Home/>
     <About/>
     <Portfolio/>
     <Project/>
    
     <Footer/>
    </div>
  );
}
