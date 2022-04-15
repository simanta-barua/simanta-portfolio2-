import { Subject } from "rxjs";
import { TOTAL_SCREENS } from "./commonUtils";
export default class ScrollService {
  static scrollHandler = new Subject();
  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();
  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }
  scrollToHireMe = () => {
    let contractMeScreen = document.getElementById("Contact Me");
    if (!contractMeScreen) return;
    contractMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scrollToHome = () => {
    let homeScreen = document.getElementById("Home");
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClintRect();
    let elementTop = rec.top;
    let elementBottom = rec.Bottom;
    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;
    switch (type) {
      case "partial":
        return partiallyVisible;
      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };
  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) return;
    for (let screen of TOTAL_SCREENS) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;
      let fullyVisible = this.isElementInView(screenFromDOM, "complete");
      let partiallyVisible = this.isElementInView(screenFromDOM, "partial");
      if (fullyVisible || !screen.alreadyRender) {
        ScrollService.currentScreenFadeIn.next({
          fadeInScreen: screen.screen_name,
        });
        screen["alreadyRendered"] = true;
        break;
      }
      if (fullyVisible) {
        ScrollService.currentScreenBroadCaster.next({
          screenInView: screen.screen_name,
        });
        break;
      }
    }
  };
}
