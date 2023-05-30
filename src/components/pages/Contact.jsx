import React, {useState} from 'react';

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

// See 20 #15 React-Forms & Mini-Project: components to BucketForm.js

const Contact = (props) => {
  const [input, setInput] = useState('');
  return (
    <div
      name="contact"
      className="contact text-stone-100 tracking-widest"
    >
      <div className="flex flex-col p-1 justify-center max-w-screen-xl my-20 mx-auto">
        <div className="pb-8">
          <p className="text-center text-4xl font-bold mb-5">
            Contact:
          </p>
          <p className="text-center text-xl tracking-widest">To contact me, simply submit this form:</p>
        </div>

        <div className="flex justify-center items-center">
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
              className="p-2 bg-transparent text-xl tracking-widest border-2 rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="my-4 p-2 bg-transparent text-xl tracking-widest border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 text-xl tracking-widest rounded-md focus:outline-none"
            ></textarea>

            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center text-xl tracking-widest rounded-md hover:scale-110 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


