import React, { Component } from 'react';
import "./App.css";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Footer from "./components/Footer";

class App extends Component{
  render(){
    return (
      <div class="bg">
        <Intro />
        <Education />
        <Footer />
      </div>
    );
  }
}

export default App;
