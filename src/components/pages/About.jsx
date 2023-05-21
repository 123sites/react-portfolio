import React, {useState, useEffect} from 'react';

export default function About() {
    return (
        <div className="w-full h-100">
            <div>
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full tracking-widest">
                    <div className="flex items-center mt-20">
                        <p className="text-4xl font-bold border-b-4 flex justify-center text-orange-300 border-orange-300">
                            About Me
                        </p>
                    </div>
                    <div>
                        <p className="text-xl mt-5 text-stone-100 font-bold mb-3">
                            I am a web developer, who likes to create beautiful user-friendly websites!
                        </p>
                        <p className="text-xl text-stone-100 font-bold">
                            I like to design websites that have a Coolors color palette, and I like to use Bootstrap and Tailwind CSS for styling.  However, I am open to learning new technologies and frameworks.  An attractive and appealing websites means more that customers will want to use and come back to your website!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

