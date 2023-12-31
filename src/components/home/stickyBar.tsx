import { styled } from "styled-components";
import { useEffect, useState } from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const StickyBar = () => {
  const [display, setDisplay] = useState(true);
  const StickyMain = styled.div`
    display: ${display ? "flex" : "none"};
    width: 100%;
    justify-content: space-between;
    padding: 0.5% 5%;
    font-family: cursive;
    background: #181818;
    color: #d3cfcf;
    font-size: 1.25em;
    .underline-css {
      font-size: 1.3em;
      display: inline-block;
      background-image: url(https://global-uploads.webflow.com/6375abc039eac4cc4fe3a4e0/638f86dbb7f3ddfaa5b71f86_heading-underline-1.svg);
      background-position: 14% 135%;
      background-size: auto;
      background-repeat: no-repeat;
      font-weight: 600;
    }
  `;
  const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      height: 25px;
      width: 25px;
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: #d3cfcf;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 15000);
  }, []);

  return (
    <StickyMain>
      <div>
        Welcome to biggest e-shop : <span className="underline-css">e-Yug</span>
      </div>
      <IconWrapper>
        Connect :{" "}
        <a href="https://www.instagram.com/ii_yashraj/" target="_blank">
          <AiFillInstagram />
        </a>{" "}
        <a href="https://www.facebook.com/" target="_blank">
          <AiFillFacebook />
        </a>{" "}
        <a href="https://github.com/iyashraj/" target="_blank">
          <AiFillGithub />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/yash-raj-06710020a/"
          target="_blank">
          <AiFillLinkedin />
        </a>
      </IconWrapper>
    </StickyMain>
  );
};

export default StickyBar;
