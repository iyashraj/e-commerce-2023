import React from 'react';
import styled from 'styled-components';
import {
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import {FcGoogle} from 'react-icons/fc'
import {FaUserCircle} from 'react-icons/fa'

const MainSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    hsla(312, 66%, 76%, 1) 0%,
    hsla(234, 93%, 67%, 1) 100%
  );
`;

const MainCard = styled.div`
  background-color: rgb(244, 243, 243);
  height: auto;
  min-height: 420px;
  width: auto;
  min-width: 325px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  flex-direction: column;
  gap: 15px;
  padding-top: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  gap:20px;
  height: auto;
  justify-content: space-between;
    min-width: 198px;
`;

const CardTitle = styled.h3`
  font-size: 26px;
  color: rgb(56, 55, 55);
  font-family: Poppins,sans-serif;
  font-weight:600;
`;

const CardSubtitle = styled.span`
  font-size: 14px;
  margin-top: -15px;
  font-weight: 400;
  color: rgb(56, 55, 55);
  font-family: Poppins,sans-serif;
`;

const InputsWrapper = styled.div`

margin-top: 20px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 92%;
`

const UsernameContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UsernameInput = styled.input`
  width: 85%;
  height: 50px;
  padding: 0 16px;
  margin: 8px 0;
  border: 0;
  border-radius: 8px;
  outline: none;
  background: #edeaf7;
  color: #5a4f79;
  font-size: 16px;
`;

const ForgotDiv = styled.div`
width:85%;
text-align: right;
font-size:12px;
font-family: Poppins,sans-serif;
margin-bottom:20px;
`

const LoginButton = styled.button`
  width: 85%;
  height: 40px;
  padding: 0 16px;
  margin: 8px 0;
  border: 0;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  font-weight: 500;
  background-color: #7016b0;
  color: #fff;
  cursor: pointer;
`;

const AuthButtonIcons = styled.div`
display: flex;
gap: 15px;
margin-bottom: 20px;
svg {
      height: 30px;
      width: 30px;
      cursor: pointer;
      opacity: 0.7;
    }
`
const SocialAuthWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  span{
    font-size: 12px;
  }
`;


function LoginForm() {
  return (
    <MainSection>
      <MainCard>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardSubtitle>Enter your credentials</CardSubtitle>
        </CardHeader>
        <InputsWrapper>
        <UsernameContainer>
          <UsernameInput type="text" placeholder="Username" />
        </UsernameContainer>
        <UsernameContainer>
          <UsernameInput type="password" placeholder="Password" />
        </UsernameContainer>
        <ForgotDiv>Forgot Password?</ForgotDiv>
        <LoginButton>Login</LoginButton>
        </InputsWrapper>
        <SocialAuthWrapper>
        <span>Or Sign Up Using</span>
        <AuthButtonIcons><AiFillFacebook/><FcGoogle/><AiFillGithub/><FaUserCircle/></AuthButtonIcons>
        </SocialAuthWrapper>
      </MainCard>
    </MainSection>
  );
}

export default LoginForm;
