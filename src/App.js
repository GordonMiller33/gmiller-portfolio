import logo from './logo.svg';
import './App.css';

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font w-full">
      <Navbar />
      <div className="hidden lg:block">
        <About />
      </div>
      <div className="flex flex-row">
        <div className="hidden lg:w-1/4 lg:flex">
        </div>
        <div className="w-full lg:w-3/4 px-0 py-5 right-0">
          <div className="lg:hidden">
            <About />
          </div>
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
