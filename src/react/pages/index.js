import Home from "./Home";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Catalog from "./Catalog";

export default {
  Home: { path: "/", component: Home },
  Detail: { path: "/details/:id", component: Detail },
  Catalog: { path: "/catalog", component: Catalog },
  NotFound: { path: "*", component: NotFound }
};
