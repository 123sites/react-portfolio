import React from 'react';

// import Form from '@tailwindcss/forms';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'; 
// import React from "react";

// Function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

// // Contact form - Later redo with my information.
// function Contact() {
//   // https://react.dev/reference/react/useRef
//   const inputRef = useRef(null);
//   // ...
//   const onButtonClick = () => {
//     // `current` points to the mounted text input element
//     inputRef.current.focus();
//   };

// components input: https://react.dev/reference/react-dom/components/input
// tailwindcss forms: https://v1.tailwindcss.com/components/forms#custom-select 

// See 20 #15 React-Forms

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">
            Contact:
          </p>
          <p className="py-6">To contact me, simply submit this form:</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action=""
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></textarea>

            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


