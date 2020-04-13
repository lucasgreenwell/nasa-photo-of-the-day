import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Header = props => {
  const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
  `;
  const [title, setTitle] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=CdV79KpZCK2hSkvv8ei9apkUcpm40sdONvynOBNK&date=${props.date}`
      )
      .then(res => {
        // console.log(res);
        setTitle(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.date]);

  // return 'string'
  return <Title className="Header">{title.title}</Title>;
};

export default Header;
