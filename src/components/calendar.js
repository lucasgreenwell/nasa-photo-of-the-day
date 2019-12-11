import React, { useState, useEffect } from "react";
import axios from "axios";

const Calendar = () => {
  //   useEffect();
  
  const cal = (
    <div className="calendar">
      <input type="date" onInput={e => {
          console.log(e.target.value);
          
      }}/>
    </div>
  );
 
  return cal;
};

export default Calendar;
