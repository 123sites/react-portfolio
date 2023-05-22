import React, { useState, useEffect } from 'react';
import Avatar from '../../images/picture-of-me.png'

export default function About() {
    return (
        <div className="w-full h-100">
            <div>
                <div className="max-w-screen-lg p-4 mx-auto flex justify-center tracking-widest">
                    <div className="flex items-center justify-center mt-20">
                        <p className="text-4xl font-bold border-b-4 flex justify-center text-orange-300 border-orange-300">
                            About Me
                        </p>
                    </div>
                </div>
                <div className="flex flex-col text-center tracking-wider">
                    <p className="flex-center text-2xl sm:text-center text-stone-100 mb-5">
                        I am a web developer, who likes to create beautiful user-friendly websites!
                    </p>
                    <p className="flex-center text-2xl sm:text-center text-stone-100 mb-5">
                        I like to design websites that have a Coolors color palette.
                        I have used Bootstrap and Tailwind CSS for styling.
                        However, I'm open to learning new technologies and frameworks.
                        An attractive and appealing websites means more that customers will want to use and come back to your website!
                    </p>
                    <div className="picture rounded-xl mx-auto w-1/5 shadow-2xl mt-5">
                    {/* <div className="picture rounded-xl mx-auto shadow-2x1 w-16 md:w-32 lg:w-75"> */}

                        <img src={Avatar}
                            alt="Me"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

