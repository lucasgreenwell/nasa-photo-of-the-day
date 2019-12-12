import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Image = props => {
    const PhotoPlace = styled.div`
    max-width: 100%;
    margin: 2rem; 
    display: flex;
    justify-content: center;
    `;
  const Photo = styled.img`
    max-width: 100%;
    border-radius: 2rem;
    border: yellow solid 2px;
    overflow: hidden;
  `;

  const [pic, setPic] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=CdV79KpZCK2hSkvv8ei9apkUcpm40sdONvynOBNK&date=${props.date}`
      )
      .then(res => {
        // console.log(res);
        setPic(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.date]);

  return (
    <PhotoPlace className="img-container">
      <div className="Image">
        <Photo src={pic.url} alt={pic.title}></Photo>
      </div>
    </PhotoPlace>
  );
};

export default Image;
