"use client";
import React from "react";
import Welcome from "./homeSections/Welcome";
import AboutMe from "./homeSections/AboutMe";
import Concat from "./homeSections/Contcat";
import Experience from "./homeSections/Works";
import Work from "./homeSections/Skill";
import { Snowfall } from "react-snowfall";

const HomePage = () => {
  return (
    <>
      <Snowfall
        color="white"
        style={{
          background: "#00",
          position: "fixed",
          width: "100%",
        }}
        snowflakeCount={20}
      />
      <Welcome />
      <AboutMe />
      <Experience />
      <Work />
      <Concat />
    </>
  );
};

export default HomePage;
