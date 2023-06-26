import React from "react";
import resume from "../../images/resume.pdf";

const Resume = () => {
  return (
    <div className="max-w-screen-xl text-stone-100 text-xl mx-auto block items-center justify-center text-center pt-10 px-1 md:flex-col tracking-widest">
      <header>
        <h1 className="text-4xl  text-orange-400 font-bold">Chel Freitas</h1>
        <br></br>
        <h3 className="text-3xl  text-orange-400 font-bold">Front-end Developer</h3>
        <br></br>
        <a className="downloadLink" href={resume} target="_blank">
          <h3 className="text-3xl  text-orange-400 font-bold animate-pulse">Downloadable Resume</h3>
        </a>
        <br></br>
      </header>

      <section>
        <h2 className="text-2xl text-orange-400 font-bold">Skills</h2>
        <ul>
          <li>JavaScript, HTML, HTML5, NoSQL, Express OOP, Node.js, APIs, PWA, React.js, MERN</li>
          <li>CSS, Bootstrap, Tailwind, and Responsive Web Design</li>
        </ul>
      </section>

      <section>
        <br></br>
        <h2 className="text-2xl text-orange-400 font-bold">Experience</h2>
        <div className="experience-item">
          <h3 className="text-2xl">Content Creator</h3>
          <h4>Self-employed</h4>
          <p>2022 - present</p>
          <ul>
            <li>Creates videos about traveliing to the Azores and researching genealogy from there.</li>
            <br></br>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="text-2xl">Middle School Teacher</h3>
          <h4>Tortolita Middle School</h4>
          <p>June 2015 - June 2022</p>
          <ul>
            <li>Taught computers, TV broadcasting, and science.</li>
            <br></br>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="text-2xl">6th Grade Teacher</h3>
          <h4>Ironwood Elementary School</h4>
          <p>June 2001 - May 2015</p>
          <ul>
            <li>Taught most subjects in 6th grade.</li>
          </ul>
        </div>
      </section>

      <section>
        <br></br>
        <h2 className="text-2xl">Education</h2>
        <div className="education-item">
          <h3>Full Stack Bootcamp</h3>
          <h4>The University of Arizona</h4>
          <p>2022 - 2023</p>
          <br></br>
        </div>
        <div className="education-item">
          <h3>Bachelor of Arts in Education, 2001</h3>
          <h3>STEM Teacher Certification, 2019</h3>
          <h3>2nd Language Teacher Certification, 2005</h3>
          <h3>Middle School Science, 2015</h3>
          <h4>The University of Arizona</h4>
          <br></br>
        </div>
      </section>

    </div>
  );
};

export default Resume;
