import React, { useState } from 'react';
import resume from "../../images/resume.pdf";

// Function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

// // Contact form - Later redo with my information.
const Contact = (props) => {
  const [input, setInput] = useState('');
  return (
    <div
      name="contact"
      className="contact text-stone-100 tracking-widest"
    >
      <div className="flex flex-col p-1 justify-center max-w-screen-xl my-10 mx-auto">
        <div>
        </div>
        <div>
          <h1 className="subtitle text-3xl sm:text-4xl text-center font-bold mb-10 text-orange-400 mt-3">Contact Information</h1>
        </div>
        <div className="pb-8">
          <p className="text-center text-2xl font-bold mb-5">
            <a href="mailto:cfreitas12345@gmail.com"
              className="text-center text-xl font-bold mb-5"
            > Email: cfreitas12345@gmail.com
            </a>
          </p>

        </div>
        <div className="pb-8">
          <p className="text-center text-2xl font-bold mb-5">
            <a href="https://github.com/123sites?tab=repositories"
              className="text-center text-2xl font-bold mb-5"
            > GitHub
            </a>
          </p>

        </div>
        <div className="pb-8">
          <p className="text-center text-2xl font-bold mb-5">
            <a href="https://www.linkedin.com/in/chelwebdeveloper/"
              className="text-center text-2xl font-bold mb-5"
            > LinkedIn
            </a>
          </p>

        </div>
        <div className="pb-8">
          <p className="text-center text-2xl font-bold mb-5">
            <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Contact;


