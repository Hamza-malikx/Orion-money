import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
const Header = () => {
  const [hamburger, setHamburger] = useState("false");
  const clickHandler = () => {
    if (hamburger === "true") {
      setHamburger("false");
    } else {
      setHamburger("true");
    }
  };
  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      // document.getElementById("block-05").style.height = "400px";
      document.getElementById("block-05").style.background = "transparent";
      document.getElementById("block-05").style.transition = " all 1s ease-out";
      document.getElementById("block-05").style.paddingTop = " 10px";
      document.getElementById("block-05").style.paddingBottom = " 10px";
      return setHeader("header");
    } else if (window.scrollY > 70) {
      console.log(document.getElementById("block-05").style.height);
      document.getElementById("block-05").style.height = "400px !important";
      document.getElementById("block-05").style.background = "#272a43";
      document.getElementById("block-05").style.paddingTop = " 0px";
      document.getElementById("block-05").style.paddingBottom = " 0px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <>
      <header className={`${header} small`} id="block-05">
        <div className="container">
          <div className="slicknav_menu">
            <label
              className={
                hamburger === "false"
                  ? `${styles.humbergButton}`
                  : `${styles.humbergButton}`
              }
              onClick={clickHandler}
            >
              <span
                className={
                  hamburger === "false"
                    ? `${styles.topbar}`
                    : `${styles.topbarab}`
                }
              ></span>
              <span
                className={
                  hamburger === "false"
                    ? `${styles.middlebar}`
                    : `${styles.middlebarab}`
                }
              ></span>
              <span
                className={
                  hamburger === "false"
                    ? `${styles.bottombar}`
                    : `${styles.bottombarab}`
                }
              ></span>
            </label>
            {hamburger === "true" ? (
              <div className={styles.wrapper}>
                <div className={styles.wrapperItems}>
                  <a href="#">Home</a>
                  <a href="#block-01">About us</a>
                  <a href="#block-02">How it works</a>
                  <a href="#block-03">APY Levels</a>
                </div>
              </div>
            ) : (
              <div className={styles.wrapperab}>
                <div className={styles.wrapperItems}>
                  <a href="#">Home</a>
                  <a href="#block-01">About us</a>
                  <a href="#block-02">How it works</a>
                  <a href="#block-03">APY Levels</a>
                </div>
              </div>
            )}
          </div>

          <a href="/" className="logo"></a>
          <div className="block">
            <a href="//app.orion.money" className="btn">
              Launch dApp
            </a>
          </div>
          <ul className="nav">
            <li>
              <a href="#block-01">About Us</a>
            </li>
            <li>
              <a href="#block-02">How it works</a>
            </li>
            <li>
              <a href="#block-03">APY Levels</a>
            </li>
            <li>
              <a
                href="https://orion-money.medium.com/orion-money-litepaper-release-7e98bb3acb6f"
                target="_blank"
                rel="noreferrer"
              >
                Lite Paper
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
