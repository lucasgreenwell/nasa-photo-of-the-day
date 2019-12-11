import React from "react";
import "./App.css";
import Header from "./components/header";
import Image from "./components/image";
import Description from "./components/description";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="img-container">
        <Image />
      </div>
      <Description />
      <Footer />
    </div>
  );
}

export default App;
