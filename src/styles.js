import styled from "styled-components";
import background from "./assets/backgroundIni.svg";

export const Container = styled.div `
  background: url("${background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;
export const Image = styled.img `
  margin-top: 30px;
`;
export const ContainerItems = styled.div `
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0 0;
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const H1 = styled.h1 `
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  margin-bottom: 80px;
  text-align: center;
`;

export const InputLabel = styled.p `
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #eeeeee;
  margin-left: 25px;
`;
export const Input = styled.input `
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  width: 342px;
  height: 58px;
  outline: none;
  padding-left: 25px;
  margin-bottom: 34px;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #fff;
`;
export const Button = styled.button `

width: 342px;
height: 74px;
border: none;
background: rgba(0, 0, 0, 0.8);
border-radius: 14px;
font-size: 17px ;
line-height: 28px;
font-style:normal ;
font-weight: bold;
cursor: pointer;
color: #fff;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.6;
}


`;