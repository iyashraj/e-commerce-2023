import React from "react";
import StickyBar from "../../components/home/stickyBar";
import Navbar from "../../components/home/navbar";
import HeroSection from "../../components/home/heroSection";

const HomeMain = () => {
  return (
    <div>
      <div style={{position:"fixed", width:"100%", top:"0", background:"#fdf9f9"}}>
        <StickyBar widgets={true}/>
        <Navbar />
      </div>
      <HeroSection />{" "}
    </div>
  );
};

export default HomeMain;
