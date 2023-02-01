import styled from "styled-components";
import Paintbox from "../../assets/imgs/paintbox.png";
import { useState,useEffect } from "react";

interface StartSlideProps {
    isStart: boolean;
}

export const StartSlide = ({isStart}:StartSlideProps) => {
  //const [isStart, setIsStart] = useState(false);  


  return (
    <Container className={isStart?"animate__animated  animate__fadeOut":"animate__animated  animate__fadeIn"}>
      <div className="center">
        <h1>Welcome to</h1>
        <h1>You Draw I Guess</h1>
        <img src={Paintbox} width={150} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  text-align: center;
  animation-duration: 1s;
  background: linear-gradient(180deg, #c2d3ff 0%, rgba(194, 211, 255, 0) 100%);
  .center {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    font-family: Jua;
    margin: 0px;
  }
  
  img {
    margin-top: 20px;
  }
`;
