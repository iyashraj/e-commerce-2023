import React,{useEffect} from "react";
import { styled } from "styled-components";
import LogoImg from "../../assets/e_yug_logo.png";
import ButtonComp from "../buttonComp";

const Navbar = () => {
  const NavMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 3%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  `;
  const LeftDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      height: 2.5rem;
      width: 2.5rem;
    }
    span {
      font-size: 1.9em;
      font-weight: 600;
      font-family: monospace;
      color: #171414;
    }
  `;
  const RightDiv = styled.div`
    font-family: cursive;
    display: flex;
    gap: 10px;
    align-items: center;
    ul {
      display: flex;
      gap: 15px;
      list-style: none;
      margin-right: 5px;
      li:hover {
        color: #e03753;
        scale: 1.1;
        border-radius: 36% 64% 0% 100% / 76% 30% 70% 24%;
        background: #fbc1c1;
        cursor: pointer;
      }
    }
  `;
  
  return (
    <NavMain>
      <LeftDiv>
        <img src={LogoImg} />
        <span>e-Yug</span>
      </LeftDiv>
      <RightDiv>
        <ul>
          <li>Explore</li>
          <li>Category</li>
          <li>Support</li>
          <li>About</li>
          <li>FAQ</li>
        </ul>
        <ButtonComp btnText="Login" />
        <ButtonComp btnText="Register" />
      </RightDiv>
    </NavMain>
  );
};

export default Navbar;
