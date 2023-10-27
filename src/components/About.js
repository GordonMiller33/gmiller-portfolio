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
    </div>
  );
}