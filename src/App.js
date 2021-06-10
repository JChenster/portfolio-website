import React, { Component } from 'react';
import "./App.css";
import NavBar from "./components/NavBar"
import Intro from "./components/Intro";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Clubs from "./components/Clubs";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

class App extends Component{
  render(){
    return (
      <div class="bg">
        <NavBar />
        <Intro />
        <Education />
        <div className="edu-exp">
          <Experience />
          <Clubs />
        </div>
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
