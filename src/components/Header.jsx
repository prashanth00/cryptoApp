import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as TelegramIcon } from "../assets/icons/telegram.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/headericon.png";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () =>
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  return (
    <>
      <div className="header-container">
        <div className="headerlogo">
          <a href="/">
            <img src={logo} alt="" className="header-logo" />
          </a>
        </div>
        <div className="menu">
          <div className="menu-links">
            <Link to="#" smooth>
              HOME
            </Link>
            <Link to="#about" smooth>
              ABOUT
            </Link>
            <Link to="#tokenomics" smooth>
              TOKENOMICS
            </Link>
            <Link to="#how-to-buy" smooth>
              HOW TO BUY
            </Link>
            <Link to="#roadmap" smooth>
              ROADMAP
            </Link>
          </div>
        </div>
        {/* <div className="wallet-btn">
          <button className="primary">Enter App</button>
        </div> */}
        {/* <div className="social-links-container">
          <div className="social-links">
            <a target="_blank" rel="noreferrer" href="https://t.me/dedpoolcoin">
              <TelegramIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/dedpoolcoin/"
            >
              <TwitterIcon />
            </a>
          </div>
        </div> */}
        <button className="hamburger" onClick={toggleExpanded}>
          <MenuIcon />
        </button>
      </div>
      {isExpanded && (
        <div className="menu-overlay">
          <div className="menu-links">
            <button className="link-button" onClick={toggleExpanded}>
              <Link to="#">HOME</Link>
            </button>
            <button className="link-button" onClick={toggleExpanded}>
              <Link to="#about">ABOUT</Link>
            </button>
            <button className="link-button" onClick={toggleExpanded}>
              <Link to="#tokenomics">TOKENOMICS</Link>
            </button>
            <button className="link-button" onClick={toggleExpanded}>
              <Link to="#how-to-buy">HOW TO BUY</Link>
            </button>
            <button className="link-button" onClick={toggleExpanded}>
              <Link to="#roadmap">ROADMAP</Link>
            </button>
          </div>
          {/* <div className="social-links-container2">
            <div className="social-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://t.me/dedpoolcoin"
              >
                <TelegramIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/dedpoolcoin/"
              >
                <TwitterIcon />
              </a>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Header;
