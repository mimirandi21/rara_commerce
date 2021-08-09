import React from "react";

import { Products, NavBar } from './components'
//^^this is a cleaner way to import the lines below
//import Products from "./components/products/Products";
//import NavBar from './components/NavBar/NavBar'
//for this abbreviation to work we must create an index.js file in our components directory
//and export all of the components from that file
const App = () => {
  return (
    <div>
      <NavBar/>
      <Products />
    </div>
  );
};

export default App;
