import styled from "styled-components";
import Paintbox from "../../assets/imgs/paintbox.png";
import { useState, useEffect } from "react";
import Avatar from "../../assets/imgs/Avatar.png";
import ButtonIcon from "../../assets/imgs/Button.png";
import { nanoid } from "nanoid";
import { HintToast } from "../widgets/HintToast";    

interface StartSlideProps {
  enter: boolean;
  setEnter:any;
}

export const LoginSlide = ({ enter,setEnter }: StartSlideProps) => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  const [userName,setUsername] = useState("")
  const [avatarColor,setAvatarColor] = useState("rgb(" + r + "," + g + "," + b + ")")

  function login(){
    if(userName.length<1){
      HintToast({icon:"warn",title:"please input name"})
      return
    }else if(userName.length>10){
      HintToast({icon:"warn",title:"name too long"})
    }else{
      const userInfo = {
        name:userName,
        userId:nanoid()
      }
      sessionStorage.setItem("userinfo",JSON.stringify(userInfo))
      setEnter(!enter)
    }
  }

  return (
    <Container
      className={
        enter
          ? "animate__animated  animate__fadeIn"
          : "animate__animated  animate__slideOutUp"
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
