
import styled from "styled-components";
import { StartSlide } from "./StartSlide";
import { useState,useEffect } from "react";
import "animate.css"

export const Start = () => {
  const [isStart, setIsStart] = useState(false);  
  useEffect(() => {
    setTimeout(() => {
      setIsStart(true);
    }, 2000);
    })
  return (
    <Container>
      <StartSlide isStart = {isStart}/>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #c2d3ff 0%, rgba(194, 211, 255, 0) 100%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
