/////////////////
"use client";
import scss from "../header/Header.module.scss";
import { Link as ScrollLink } from "react-scroll";
import BurgerMenu from "./BurgerMenu";
import { useEffect, useState } from "react";

const links = [
  {
    name: "home",
    link: "home",
  },
  {
    name: "About",
    link: "about",
  },

  {
    name: "Work",
    link: "work",
  },
  {
    name: "Skill",
    link: "skill",
  },
  {
    name: "Contacts",
    link: "contcat",
  },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <ScrollLink
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
            >
              <h3>M-14</h3>
            </ScrollLink>
          </div>

          {isMobile ? (
            <>
              <button className={scss.bur} onClick={() => setIsOpen(!isOpen)}>
                Burger
              </button>
              <BurgerMenu links={links} isOpen={isOpen} />
            </>
          ) : (
            <>
              <div className={scss.nav}>
                <ul>
                  {links.map((item, index) => (
                    <li key={index}>
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
                    </li>
                  ))}
                </ul>
              </div>
              <div className={scss.buutons}>
                <button className={scss.btn}>resume</button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

/////////////////////////
