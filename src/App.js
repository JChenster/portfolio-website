import React, { Component } from 'react';
import "./App.css";
import NavBar from "./components/NavBar"
import Intro from "./components/Intro";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

class App extends Component{
    render(){
        return (
            <div>
            <NavBar />
            <Intro />
            <Education />
            <Experience />
            <Projects />
            <Footer />
            </div>
        );
    }
}

export default App;
