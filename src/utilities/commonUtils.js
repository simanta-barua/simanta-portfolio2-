import Home from "../PortfolioContainer/Home/Home";
import Resume from "../PortfolioContainer/Resume/Resume";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";
import Testimonial from "../PortfolioContainer/Testimonial/Testimonial";
export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "ContactMe",
    component: ContactMe,
  },
  {
    screen_name: "Testimonial",
    component: Testimonial,
  },
];
export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
