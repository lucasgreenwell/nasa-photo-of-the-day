import React from "react";
import "./App.css";
import Header from "./components/header";
import Image from "./components/image";
import Description from "./components/description";
import Footer from "./components/footer";
// import Calendar from "./components/calendar";
import ReactDOM from "react-dom";

let date = "2019-10-06"


const Calendar = () => {
  //   useEffect();

  const cal = (
    <div className="calendar">
      <input
        type="date"
        onInput={e => {
          date = e.target.value;
          console.log(date);
          ReactDOM.render(<App />, document.getElementById("root"));
        }}
      />
    </div>
  );

  return cal;
};



function App() {
  
  return (
    <div className="App">
      <Header date={date}/>

      <Image date={date}/>

      <Description date={date}/>

      <Calendar />

      <Footer />
    </div>
  );
}


export default App;
