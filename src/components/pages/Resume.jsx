import React from "react";

const resume = ({ fileUrl }) => {
  return (
    <a className="downloadLink" href={fileUrl}>
      Download PDF
    </a>
  );
};

const Resume = () => {
  return (
    <div className="max-w-screen-xl text-stone-100 text-xl mx-auto block items-center justify-center text-center pt-10 px-1 md:flex-col tracking-widest">
      <header>
        <h1 className="text-4xl  text-orange-400 font-bold">Chel Freitas</h1>
        <br></br>
        <h3 className="text-2xl  text-orange-400 font-bold">Front-end Developer</h3>
        <br></br>
        <h3 className="text-2xl  text-orange-400 font-bold">Downloadable Resume</h3>
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
          <p>2015 - 2022</p>
          <ul>
            <li>Taught computers, TV broadcasting, and science.</li>
            <br></br>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="text-2xl">6th Grade Teacher</h3>
          <h4>Ironwood Elementary School</h4>
          <p>January 2019 - May 2019</p>
          <ul>
            <li>Taught most subject in 6th grade.</li>
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



// import React, { Component } from "react";
// import ResumeCard from "./resume";
// import DownloadLink from "./download";

// class Resume extends Component {
//   state = {
//     resume: process.env.PUBLIC_URL + "/resume.pdf",
//     experience: [
//       {
//         date: "2022 - present",
//         name: "Azores Travel & Genealogy YouTube Channel",
//         summary:
//           "YouTube content creator,"
//       },
//       {
//         date: "2015 - 2022",
//         name: "Tortolita Middle School",
//         summary:
//           "Introductory coding, graphic arts, and TV Broadcasting.",
//       },
//       {
//         date: "2001 - 2015",
//         name: "Ironwood Elementary School",
//         summary:
//           "Sixth grade teacher.",
//       },
//     ],
//     education: [
//       {
//         date: "2022 - 2023",
//         name: " University of Arizona",
//         summary: "Full Stack Bootcamp Certification",
//       },
//       {
//         date: "2001 - 2015 ",
//         name: " University of Arizona",
//         summary: "Bachelor's in Elementary Education (K-8), endorsements in: Middle School Science, STEM, and Second Language Learner Teacher",
//       },
//     ],
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <div className="p-5 container">
//           <h2 className="text-center">
//             My <span className="resume-span">Background</span>
//           </h2>
//           <div className="text-center">
//             <DownloadLink fileUrl={this.state.resume} />
//           </div>

//           <div>
//             <h3 className="text-center">Experience</h3>
//             <div className="row px-5">
//               {this.state.experience.map((exp, index) => (
//                 <ResumeCard
//                   key={index}
//                   name={exp.name}
//                   summary={exp.summary}
//                   date={exp.date}
//                 />
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-center">Education</h3>
//             <div className="row px-5">
//               {this.state.education.map((edu, index) => (
//                 <ResumeCard
//                   key={index}
//                   name={edu.name}
//                   summary={edu.summary}
//                   date={edu.date}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default Resume;