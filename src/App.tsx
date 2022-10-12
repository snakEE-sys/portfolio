import React from "react";
import "./App.css";
import { Navbar, Header, Arrow, About, Work, Footer } from "./components";
import "animate.css";

function App() {
  return (
    <div className="App">
      <div className="custom-bg min-h-screen">
        <Navbar />
        <div
          className="w-full flex items-center flex-col lg:flex-row overflow-hidden"
          style={{ height: "100vh" }}
        >
          <Header />
        </div>
        <div className="flex justify-center">
          <Arrow />
        </div>
      </div>
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
