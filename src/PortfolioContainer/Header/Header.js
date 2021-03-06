import React, { useState } from "react";
import "./Header.css";
import { GET_SCREEN_INDEX, TOTAL_SCREENS } from "../../utilities/commonUtils";
import ScrollService from "../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [selectedScreen, setSelctedScreen] = useState(0);
  const [showHeaderOptons, setShowHeaderOptons] = useState(false);
  const updateCurrentScreen = (currentScreen) => {
    if (currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };
  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ));
  };
  const getHeaderOptionsClass = (index) => {
    let classes = "header-option";
    if (index < TOTAL_SCREENS.length - 1);
    classes += "header-option-separator";
    if (selectedScreen === index) classes += "setected-header-option";
    return;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;
    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelctedScreen(index);
    setShowHeaderOptons(false);
  };
  return (
    <div>
      <div
        className="header-container"
        onClick={() => setShowHeaderOptons(!showHeaderOptons)}
      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => setShowHeaderOptons(!showHeaderOptons)}
          >
            <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
          </div>
          <div className="header-logo">
            <span>SIMANTA</span>
          </div>
          <div
            className={
              showHeaderOptons
                ? "header-options show-hamburger-options"
                : "header-options"
            }
          >
            {getHeaderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
