import {routes} from "./routes";
import {svg} from "../assets/svg";

export const tabs = [
  {
    id: 1,
    route: routes.HOME,
    icon: svg.HomeTabSvg,
  },
  {
    id: 2,
    route: routes.CATEGORIES,
    icon: svg.SearchTabSvg,
  },
  {
    id: 3,
    route: routes.ORDER,
    icon: svg.BagTabSvg,
  },
  {
    id: 4,
    route: routes.WISHLIST,
    icon: svg.HeartTabSvg,
  },
  {
    id: 5,
    route: routes.PROFILE,
    icon: svg.UserTabSvg,
  },
];
