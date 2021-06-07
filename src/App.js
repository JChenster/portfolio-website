import React, { Component } from 'react';
import "./App.css";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

class App extends Component{
  render(){
    return (
      <div class="bg">
        <div class="intro">
          <Intro />
        </div>
        <div class="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
