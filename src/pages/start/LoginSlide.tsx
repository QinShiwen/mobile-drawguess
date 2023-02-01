import styled from "styled-components";
import Paintbox from "../../assets/imgs/paintbox.png";
import { useState, useEffect } from "react";
import Avatar from "../../assets/imgs/Avatar.png";
import ButtonIcon from "../../assets/imgs/Button.png";
import { nanoid } from "nanoid";
                                                          
interface StartSlideProps {
  isStart: boolean;
}

export const LoginSlide = ({ isStart }: StartSlideProps) => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const avatarColor = "rgb(" + r + "," + g + "," + b + ")";

  const [userName,setUsername] = useState("")
  function login(){
    const userInfo = {
      name:userName,
      userId:nanoid()
    }
    sessionStorage.setItem("userinfo",JSON.stringify(userInfo))
  }

  return (
    <Container
      className={
        isStart
          ? "animate__animated  animate__fadeOut"
          : "animate__animated  animate__fadeIn"
      }
    >
      <LoginBox>
        <img
          height={50}
          src={Avatar}
          style={{
            backgroundColor: avatarColor,
            padding: "10px",
            borderRadius: "50%",
          }}
        />
        <div>
          <div>name</div>
          <input value = {userName} onChange = {(e)=>setUsername(e.target.value)}></input>
        </div>
      </LoginBox>
      <img className="button" src={ButtonIcon} height={100} onClick = {login}/>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-duration: 1s;

  .button {
    margin-top: 200px;
    cursor: pointer;
  }
`;

const LoginBox = styled.div`
  width: 302px;
  height: 259px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  font-family: Jua;
  font-size:20px;
  img{
    margin:20px;
  }

  input {
    width: 200px;
    padding:10px;
    background: #ffffff;
    border: 3px solid #000000;
    border-radius: 16px;
    font-size:18px;
    outline-style: none;
  }
`;
