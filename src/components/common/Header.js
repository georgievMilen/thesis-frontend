import { displayRouteMenu } from "../../routes/helpers/displayRouteMenu";
import { ROUTES } from "../../routes/routes";
const Header = () => {
  return displayRouteMenu(ROUTES);
};

export { Header };
