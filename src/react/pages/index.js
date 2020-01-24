import Home from "./Home";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Catalog from "./Catalog";
import Register from "./Register";

export default {
  Home: { path: "/", component: Home },
  Detail: { path: "/details/:id", component: Detail },
  Catalog: { path: "/catalog", component: Catalog },
  Register: { path: "/register", component: Register },
  NotFound: { path: "*", component: NotFound }
};
