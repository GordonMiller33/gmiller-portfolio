import React from "react";

export default function About() {
  return (
    <div className="lg:fixed lg:w-1/4 mx-2 px-8 lg:my-16 text-center lg:text-left">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-purple-500 font-semibold text-center pr-5">
        I Make Things
      </h1>
      <p className="mb-8 leading-relaxed">
        Since before I can remember it's been my passion to create things that people will use and enjoy. When I was young these 
        took the forms of <div className="inline text-purple-400">board and card games</div> to play with my friends, that evolved 
        into a (totally healthy) obsession with <div className="inline text-purple-400">tabletop roleplaying games</div>, and eventually 
        into a love 
        for <div className="inline text-purple-400">coding</div> and <div className="inline text-purple-400">Web Development</div> when 
        I was introduced to the concept by my high school computer science teacher.
      </p>
      <p className="mb-8 leading-relaxed">
        I would go on to study <div className="inline text-purple-400">Computer Science</div> at <div className="inline text-purple-400">Rutgers University </div> 
        where I learned to work on projects as part of a team. Following 
        college I had a government internship where I worked on updating existing sites and services used by the 
        <div className="inline text-purple-400"> Federal Avaition Administration</div>.
        Now, my forays into coding are mostly for passion projects or small websites for friends but I'm looking to work on a large team and
        create something big again!
      </p>
    </div>
  );
}