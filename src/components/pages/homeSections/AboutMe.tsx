import React from "react";
import scss from "../homeSections/AboutMe.module.scss";
import aboutImg from "../../../assets/fd8894dd2a8a7fe03c77f98532c026ba.jpg";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "Contact me",
    link: "contcat",
  },
];

const AboutMe = () => {
  return (
    <section id="about" className={scss.AboutMe}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image}>
            <Image src={aboutImg} alt="" />
          </div>
          <div className={scss.text}>
            <h1>
              About <span>Me</span>
            </h1>
            <h2>Experienced Frontend Developer from Kyrgyzstan</h2>
            <p>
              I am a frontend developer with extensive experience and deep
              knowledge in web development. I specialize in markup and
              programming using HTML, CSS, JavaScript and TypeScript. I have
              significant experience working with modern libraries and
              frameworks such as React, Redux and Next.js. I can create
              effective and responsive user interfaces, ensuring high quality
              and performance of web applications.
            </p>
            <div className={scss.buttons}>
              {links.map((item, index) => (
                <button id="work" key={index}>
                  <ScrollLink
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                  >
                    {item.name}
                  </ScrollLink>
                </button>
              ))}
              {/* <button id="work">my contact</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
