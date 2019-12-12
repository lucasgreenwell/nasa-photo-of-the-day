import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Description = props => {
  const Paragraph = styled.div`
    font-size: 2rem;
    text-align: justify;
    padding: 2%;
  `;

  const [words, setWords] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=CdV79KpZCK2hSkvv8ei9apkUcpm40sdONvynOBNK&date=${props.date}`
      )
      .then(res => {
        // console.log('are we looping')
        // console.log(res);
        setWords(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.date]);

  // return 'string'
  return <Paragraph className="Description">{words.explanation}</Paragraph>;
};

export default Description;
