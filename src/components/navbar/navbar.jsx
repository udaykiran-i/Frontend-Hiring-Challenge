import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./navbar.css";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={require("./logo.jpg")} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/mens">Men's clothing</a>
          <a href="/womens">Women's clothing</a>
          <a href="/jewelery">Jewellery</a>
          <a href="/electronics">Electronics</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <img src={require("./down.png")}/>
      </button>
    </header>
  );
}
