import React from "react";
import { Footer, Menu, MenuBody } from "./components";
import { ProductDetail } from "./components/ProductDetail";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Menu />
      <MenuBody />
      {/* 
        This is where routes will be defined
          1. create route array of objects in seperate file 
          with each object having properties:
            - routePath: the url path to display the page ex '/catalog' 
            - component: the "component" to show when the routePath is accessed
          2. import that route array into this file
          3. map over route array to create routes
      */}
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
