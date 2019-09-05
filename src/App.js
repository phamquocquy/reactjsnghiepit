import React from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Color from "./components/Color";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Products />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Color />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
