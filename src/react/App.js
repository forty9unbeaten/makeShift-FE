import React from "react";
import { Footer, Menu } from "./components";

function App() {
  return (
    <div>
      <Menu />
      {/* 
        This is where routes will be defined
          1. create route array of objects in seperate file 
          with each object having properties:
            - routePath: the url path to display the page ex '/catalog' 
            - component: the "component" to show when the routePath is accessed
      */}
      <Footer />
    </div>
  );
}

export default App;
