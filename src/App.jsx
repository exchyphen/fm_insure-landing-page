import { useState } from "react";
import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";
import Hero from "./assets/images/image-intro-desktop.jpg";
import PatternLeftDesktop from "./assets/images/bg-pattern-intro-left-desktop.svg";
import PatternRightDesktop from "./assets/images/bg-pattern-intro-right-desktop.svg";

function App() {
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
          <p className="header__p">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button className="header__button bold button--light">
            view plans
          </button>
        </div>
      </header>

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
