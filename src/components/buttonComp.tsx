import React from "react";
import { styled } from "styled-components";

export interface IProps {
  btnText: string;
  onClick?: any;
  className?: string;
}

  const ButtonMain = styled.button`
    background-color: #ffffff;
    border: 1px solid #222222;
    border-radius: 8px;
    color: #222222;
    cursor: pointer;
    display: inline-block;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
      "Helvetica Neue", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    margin: 0;
    outline: none;
    padding: 7px 20px;
    position: relative;
    text-align: center;
    text-decoration: none;
    touch-action: manipulation;
    transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
      transform 0.1s;
    user-select: none;
    -webkit-user-select: none;
    width: auto;
    &:focus-visible {
      box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
      transition: box-shadow 0.2s;
    };
    &:active {
      background-color: #f7f7f7;
      border-color: #000000;
      transform: scale(0.96);
    };
    &:disabled {
      border-color: #dddddd;
      color: #dddddd;
      cursor: not-allowed;
      opacity: 1;
    };
  `;

const ButtonComp = (props: IProps) => {
  const { btnText, className, onClick } = props;
  return (
    <ButtonMain onClick={onClick} className={`${className}`}>
      {btnText}
    </ButtonMain>
  );
};

export default ButtonComp;
