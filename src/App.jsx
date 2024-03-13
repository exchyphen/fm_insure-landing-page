import { useEffect, useState } from "react";
import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";
import Hero from "./assets/images/image-intro-desktop.jpg";
import PatternLeftDesktop from "./assets/images/bg-pattern-intro-left-desktop.svg";
import PatternRightDesktop from "./assets/images/bg-pattern-intro-right-desktop.svg";
import Snappy from "./assets/images/icon-snappy-process.svg";
import Affordable from "./assets/images/icon-affordable-prices.svg";
import PeopleFirst from "./assets/images/icon-people-first.svg";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const mobileBreakpoint = 800;

  const data__featureItems = [
    {
      img: Snappy,
      title: "Snappy Process",
      description:
        "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    },
    {
      img: Affordable,
      title: "Affordable Prices",
      description:
        "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      img: PeopleFirst,
      title: "People First",
      description:
        "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
    },
  ];

  /* item creation */
  const createFeatureItems = () => {
    return data__featureItems.map((data, index) => {
      return (
        <div key={`featureItem${index}`} className="feature__content-item">
          <img
            className="feature__item-img"
            src={data.img}
            alt={`${data.title} img`}
          ></img>
          <h3 className="feature__item-title text--header">{data.title}</h3>
          <p className="feature__item-description text--p">
            {data.description}
          </p>
        </div>
      );
    });
  };

  /* initial load */
  useEffect(() => {
    const resize = () => setWindowSize(window.innerWidth);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <img
        className="bg__pattern bg__pattern--left"
        src={PatternLeftDesktop}
        alt="bg pattern left img"
      ></img>
      <img
        className="bg__pattern bg__pattern--right"
        src={PatternRightDesktop}
        alt="bg pattern right img"
      ></img>

      <nav className="nav">
        <img className="nav__logo" src={Logo} alt="logo img"></img>
        <div className="nav__right-container">
          <a className="nav__link bold">how we work</a>
          <a className="nav__link bold">blog</a>
          <a className="nav__link bold">account</a>
          <button className="nav__button bold button--dark">view plans</button>
        </div>
      </nav>

      <header className="header">
        <img className="header__img" src={Hero} alt="header img"></img>
        <div className="line line--light"></div>
        <div className="header__content">
          <h1 className="header__h1 text--header">
            Humanizing your insurance.
          </h1>
          <p className="header__p text--p">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button className="header__button bold button--light">
            view plans
          </button>
        </div>
      </header>

      <article className="feature">
        <div className="line line--dark"></div>
        <h2 className="feature__header text--header">We're different</h2>
        <div className="feature__content">{createFeatureItems()}</div>
      </article>

      <article className="banner">
        <div className="banner__wrapper">
          <h1 className="banner__header text--header">
            Find out more about how we work
          </h1>
          <button className="button--light">how we work</button>
        </div>
      </article>

      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/exchyphen" target="_blank">
            exc
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
