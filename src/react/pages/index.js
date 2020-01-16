import Home from "./Home";
import Detail from "./Detail";
import Category from "./Category";
import NotFound from "./NotFound";

export default {
  Home: { path: "/", component: Home },
  Detail: { path: "/details/:id", component: Detail },
  Category: { path: "/category", component: Category },
  NotFound: { path: "*", component: NotFound }
};
// comment
