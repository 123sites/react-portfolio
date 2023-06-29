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
      <div className="flex flex-col p-2 drop-shadow-2xljustify-center max-w-screen-xl my-10 mx-auto">
        <div>
        </div>
        <div className="bg-stone-100 rounded drop-shadow-2xl tracking-widest text-extrabold border-8 border-orange-500">
          <div>
            <h1 className="subtitle text-3xl sm:text-4xl text-center text-orange-500 mb-5 mt-3">Contact Information</h1>
          </div>
          <div className="pb-6">
            <p className="text-center text-2xl tracking-widest mb-1 rounded text-blue-800 hover:text-orange-500">
              <a href="mailto:cfreitas12345@gmail.com"
                className="text-center font-extrabold"
              > Email: cfreitas12345@gmail.com
              </a>
            </p>

          </div>
          <div className="pb-6">
            <p className="text-center text-2xl mb-1 text-blue-800 rounded hover:text-orange-500">
              <a href="https://github.com/123sites?tab=repositories"
                className="text-center text-2xl font-bold mb-5"
              > GitHub
              </a>
            </p>

          </div>
          <div className="pb-6">
            <p className="text-center text-2xl mb-1 text-blue-800 rounded hover:text-orange-500">
              <a href="https://www.linkedin.com/in/chelwebdeveloper/"
                className="text-center text-2xl font-bold mb-5"
              > LinkedIn
              </a>
            </p>

          </div>
          <div className="pb-6">
            <p className="text-center text-2xl mb-1 text-blue-800 rounded font-extrabold hover:text-orange-500">
              <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;


