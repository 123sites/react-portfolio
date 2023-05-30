import React from "react";

const resume = ({ fileUrl }) => {
  return (
    <a className="downloadLink" href={fileUrl}>
      Download PDF
    </a>
  );
};

export default resume;


// const Resume = () => {
//   return (
//     <div className="resume">
//       <header>
//         <h1>Chel Freitas</h1>
//         <h3>Front-end Developer</h3>
//         <h3>Downloadable Resume</h3>
//       </header>

//       <section>
//         <h2>Skills</h2>
//         <ul>
//           <li>HTML5</li>
//           <li>CSS</li>
//           <li>Tailwind</li>
//           <li>JavaScript</li>
//           <li>React.js</li>
//           <li>Responsive Web Design</li>
//         </ul>
//       </section>

//       <section>
//         <h2>Experience</h2>
//         <div className="experience-item">
//           <h3>Content Creator</h3>
//           <h4>Self-employed</h4>
//           <p>2022 - present</p>
//           <ul>
//             <li>Creates videos about traveliing to the Azores and researching genealogy from there.</li>
//           </ul>
//         </div>

//         <div className="experience-item">
//           <h3>Middle School Teacher</h3>
//           <h4>Tortolita Middle School</h4>
//           <p>2015 - 2022</p>
//           <ul>
//             <li>Taught computers, TV broadcasting, and science.</li>
//           </ul>
//         </div>

//         <div className="experience-item">
//           <h3>6th Grade Teacher</h3>
//           <h4>Ironwood Elementary School</h4>
//           <p>January 2019 - May 2019</p>
//           <ul>
//             <li>Taught most subject in 6th grade.</li>
//           </ul>
//         </div>
//       </section>

//       <section>
//         <h2>Education</h2>
//         <div className="education-item">
//           <h3>Full Stack Bootcamp</h3>
//           <h4>The University of Arizona</h4>
//           <p>2022 - 2023</p>
//         </div>
//         <div className="education-item">
//           <h3>Bachelor of Arts in Education, 2001</h3>
//           <h3>STEM Teacher Certification, 2019</h3>
//           <h3>2nd Language Teacher Certification, 2005</h3>
//           <h3>Middle School Science, 2015</h3>
//           <h4>The University of Arizona</h4>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Resume;



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