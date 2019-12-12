import React, { useState, useEffect } from "react";
import axios from "axios";
import date from '../App'
// import Image from "./components/image";

const Calendar = () => {
  //   useEffect();

  const cal = (
    <div className="calendar">
      <input
        type="date"
        onInput={e => {
          date = e.target.value;
        }}
      />
    </div>
  );

  return cal;
};

export default Calendar;
