import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none  sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest ">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam
        quod dolorum, repudiandae soluta doloribus voluptatum illo aut tempore
        corrupti nostrum veniam commodi assumenda quas? Deserunt ratione
        similique illo, dolor placeat dicta reprehenderit optio, obcaecati saepe
        voluptates, qui praesentium! Ullam!
      </p>
    </>
  );
};

export default About;
