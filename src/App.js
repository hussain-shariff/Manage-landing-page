import React from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Testemonial from "./components/Testemonial";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Features/>
      <Testemonial/>
      <Footer/>
    </div>
  );
}

export default App;
