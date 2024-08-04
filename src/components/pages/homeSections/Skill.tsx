import React from "react";
import scss from "../homeSections/Skill.module.scss";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { SiVisualstudiocode } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Skill = () => {
  return (
    <section id="skill" className={scss.Skill}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.textStack}>
            <div className={scss.line}></div>
            <h1>MY SKILL</h1>
            <div className={scss.line}></div>
          </div>
          <div className={scss.images}>
            <div className={scss.stack1}>
              <FaHtml5 />
            </div>
            <div className={scss.stack2}>
              <FaCss3Alt />
            </div>
            <div className={scss.stack3}>
              <IoLogoJavascript />
            </div>
            <div className={scss.stack4}>
              <SiTypescript />
            </div>
            <div className={scss.stack5}>
              <SiSass />
            </div>
            <div className={scss.stack6}>
              <FaReact />
            </div>
            <div className={scss.stack7}>
              <SiRedux />
            </div>
            <div className={scss.stack8}>
              <SiVite />
            </div>
            <div className={scss.stack9}>
              <RiNextjsFill />
            </div>
            <div className={scss.stack10}>
              <SiVisualstudiocode />
            </div>
            <div className={scss.stack11}>
              <FaFigma />
            </div>
            <div className={scss.stack12}>
              <FaGithub />
            </div>
            <div className={scss.stack13}>
              <FaGitAlt />
            </div>
            <div className={scss.stack14}>
              <RiTailwindCssFill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
