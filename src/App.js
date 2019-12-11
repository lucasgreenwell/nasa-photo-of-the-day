import React from "react";
import "./App.css";
import Header from "./components/header";
import Image from "./components/image";
import Description from "./components/description";
import Footer from "./components/footer";
import Calendar from "./components/calendar";

function App() {
  return (
    <div className="App">
      <Header />

      <Image />

      <Description />

      <Calendar />

      <Footer />
    </div>
  );
}

export default App;
