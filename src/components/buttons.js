import React from 'react';
import styled from "styled-components";

const Thing = styled.button`
font-size: 1.5em;
text-align: center;
color: palevioletred;
border-radius: 1rem;`;

const Container = styled.div`
display: flex;
justify-content: center;
margin: 2%;
`;

const Button = () => {
  return (
    <Container>
      <Thing>Whatever</Thing>
    </Container>
  )
}

export default Button