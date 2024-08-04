import React from "react";
import scss from "../homeSections/Welcome.module.scss";
import user from "../../../assets/Снимок экрана от 2024-07-31 05-24-50.png";
import user1 from "../../../assets/Снимок экрана от 2024-08-04 06-07-43.png";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Welcome = () => {
  return (
    <section id="home" className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>Hi, I am Alim Mahmudov </h1>
            <h2>
              <Typewriter
                words={["FRONT-END DEVELOPER"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </h2>
            <p>
              I am an experienced front-end developer with deep knowledge and
              skills in HTML, CSS, JavaScript, TypeScript coding and
              programming, as well as working with libraries and frameworks such
              as React, Redux and Next.js.
            </p>
            <div className={scss.icons}>
              <a className={scss.telegram} href="https://t.me/MahmudovAlim">
                {" "}
                <FaTelegramPlane />
              </a>
              <a
                className={scss.telegram}
                href="https://www.instagram.com/alimdev_05"
              >
                {" "}
                <AiFillInstagram />
              </a>

              <a className={scss.telegram} href="https://github.com/">
                {" "}
                <FaGithub />
              </a>
            </div>
          </div>
          <div className={scss.image}>
            <Image src={user1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
