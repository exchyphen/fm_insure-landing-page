import { useEffect, useState } from "react";
import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";
import HeroDesktop from "./assets/images/image-intro-desktop.jpg";
import HeroMobile from "./assets/images/image-intro-mobile.jpg";
import PatternLeftDesktop from "./assets/images/bg-pattern-intro-left-desktop.svg";
import PatternLeftMobile from "./assets/images/bg-pattern-intro-left-mobile.svg";
import PatternRightDesktop from "./assets/images/bg-pattern-intro-right-desktop.svg";
import PatternRightMobile from "./assets/images/bg-pattern-intro-right-mobile.svg";
import Snappy from "./assets/images/icon-snappy-process.svg";
import Affordable from "./assets/images/icon-affordable-prices.svg";
import PeopleFirst from "./assets/images/icon-people-first.svg";
import Facebook from "./assets/images/icon-facebook.svg";
import Twitter from "./assets/images/icon-twitter.svg";
import Pinterest from "./assets/images/icon-pinterest.svg";
import Instagram from "./assets/images/icon-instagram.svg";
import MenuOpen from "./assets/images/icon-hamburger.svg";
import MenuClose from "./assets/images/icon-close.svg";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileBreakpoint = 915;

  const data__navItems = ["how we work", "blog", "account"];

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

  const data__ourCompany = [
    "how we work",
    "why insure?",
    "view plans",
    "reviews",
  ];

  const data__helpMe = ["faq", "terms of use", "privacy policy", "cookies"];

  const data__contact = ["sales", "support", "live chat"];

  const data__others = ["careers", "press", "licenses"];

  const data__footer = [
    {
      title: "our company",
      list: data__ourCompany,
    },
    {
      title: "help me",
      list: data__helpMe,
    },
    {
      title: "contact",
      list: data__contact,
    },
    {
      title: "others",
      list: data__others,
    },
  ];

  const data__socials = [Facebook, Twitter, Pinterest, Instagram];

  /* item creation */
  const createNavItems = () => {
    const mobile = mobileBreakpoint >= windowSize;

    return data__navItems.map((data, index) => {
      return (
        <a
          key={`navItem${index}`}
          className={
            "nav__link bold" +
            (mobile ? " nav__link--light nav__link--menu" : "")
          }
        >
          {data}
        </a>
      );
    });
  };

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

  const createSitemap = () => {
    return data__footer.map((data, index) => {
      return (
        <div key={`footerList${index}`} className="footer__list">
          <p className="footer__title">{data.title}</p>
          {data.list.map((list, listIndex) => {
            return (
              <a
                key={`footerList${index}-Item${listIndex}`}
                className="footer__item"
              >
                {list}
              </a>
            );
          })}
        </div>
      );
    });
  };

  const createSocialItems = () => {
    return data__socials.map((data, index) => {
      return (
        <img
          key={`social${index}`}
          className="footer__img"
          src={data}
          alt="social icon"
        ></img>
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
      {menuOpen && mobileBreakpoint >= windowSize ? (
        <div className="menu">
          {createNavItems()}
          <button className="nav__button bold button--light nav__button--menu">
            view plans
          </button>
        </div>
      ) : null}

      {windowSize > mobileBreakpoint ? (
        <img
          className="bg__pattern bg__pattern--left"
          src={PatternLeftDesktop}
          alt="bg pattern left img"
        ></img>
      ) : null}
      {windowSize > mobileBreakpoint ? (
        <img
          className="bg__pattern bg__pattern--right"
          src={PatternRightDesktop}
          alt="bg pattern right img"
        ></img>
      ) : null}

      <nav className="nav">
        <img className="nav__logo" src={Logo} alt="logo img"></img>
        {windowSize > mobileBreakpoint ? (
          <div className="nav__right-container">
            {createNavItems()}
            <button className="nav__button bold button--dark">
              view plans
            </button>
          </div>
        ) : (
          <img
            className="nav__menu"
            src={menuOpen ? MenuClose : MenuOpen}
            alt="menu icon"
            onClick={() => setMenuOpen(!menuOpen)}
          ></img>
        )}
      </nav>

      <img
        className="header__img"
        src={windowSize > mobileBreakpoint ? HeroDesktop : HeroMobile}
        alt="header img"
      ></img>
      <header className="header">
        {windowSize > mobileBreakpoint ? (
          <div className="line line--light"></div>
        ) : null}
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

        {windowSize <= mobileBreakpoint ? (
          <img
            className="bg__pattern bg__pattern--left"
            src={PatternLeftMobile}
            alt="bg pattern left img"
          ></img>
        ) : null}
        {windowSize <= mobileBreakpoint ? (
          <img
            className="bg__pattern bg__pattern--right"
            src={PatternRightMobile}
            alt="bg pattern right img"
          ></img>
        ) : null}
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

      <footer className="footer">
        <hgroup className="footer__hgroup">
          <img className="footer__logo" src={Logo} alt="logo img"></img>
          <div className="footer__social-container">{createSocialItems()}</div>
        </hgroup>
        <div className="footer__line"></div>
        <div className="footer__sitemap-container">{createSitemap()}</div>
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
