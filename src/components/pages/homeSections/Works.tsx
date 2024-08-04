import React from "react";
import scss from "../homeSections/Works.module.scss";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import photo1 from "../../../assets/Снимок экрана от 2024-08-04 03-31-56.png";
import photo2 from "../../../assets/Снимок экрана от 2024-08-04 03-00-51.png";
import photo3 from "../../../assets/Снимок экрана от 2024-08-04 03-03-43.png";

const Works = () => {
  return (
    <section id="work" className={scss.Works}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.firstText}>
            <h1>PROJECTS</h1>
            <h2>Each project is a unique piece of development</h2>
          </div>
          <div className={scss.blog}>
            <div className={scss.card}>
              <div className={scss.text}>
                <h1>Call of Duty</h1>
                <p>
                  Call of Duty: Modern Warfare 3 is a website dedicated to the
                  popular video game. The site provides information about the
                  game, including the plot, characters, gameplay, and modes.
                  Users can find news and updates, trailers, screenshots, and
                  other media. The section also contains frequently asked
                  questions, guides, and a forum for discussing games.
                </p>
                <div className={scss.box}>
                  <h3>
                    Code <FaGithub />
                  </h3>
                  <h3>
                    Live Demo <BsBoxArrowUpRight />
                  </h3>
                </div>
              </div>
              <div className={scss.image}>
                <Image className={scss.photo1} src={photo1} alt="" />
              </div>
            </div>
            {/* ////// */}

            <div className={scss.card2}>
              <div className={scss.image}>
                <Image className={scss.photo2} src={photo2} alt="" />
              </div>
              <div className={scss.text}>
                <h1>Temir</h1>
                <p>
                  Jordan's sneaker site offers information on models and
                  collections, including detailed descriptions, photos and
                  reviews. The site provides information on the brand's history,
                  news on upcoming releases and exclusive collections. Users can
                  make purchases, subscribe to updates and participate in
                  discussions.
                </p>
                <div className={scss.box}>
                  <h3>
                    Code <FaGithub />
                  </h3>
                  <h3>
                    Live Demo <BsBoxArrowUpRight />
                  </h3>
                </div>
              </div>
            </div>

            {/* ///// */}

            <div className={scss.card}>
              <div className={scss.text}>
                <h1>Jordan</h1>
                <p>
                  The credit card website provides information on various types
                  of credit cards, their terms, interest rates and bonuses.
                  Users can compare cards, read reviews, get advice on choosing
                  and managing loans, and learn about current promotions and
                  offers.
                </p>
                <div className={scss.box}>
                  <h3>
                    Code <FaGithub />
                  </h3>
                  <h3>
                    Live Demo <BsBoxArrowUpRight />
                  </h3>
                </div>
              </div>
              <div className={scss.image}>
                <Image className={scss.photo3} src={photo3} alt="" />
              </div>
            </div>

            {/* ///// */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
