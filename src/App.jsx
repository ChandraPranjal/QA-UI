import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="flex max-h-screen flex-col">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
