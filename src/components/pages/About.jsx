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
                    After teaching, I decided to make a career change into web development! 
                    As a teacher, I taught middle school technology, science, and TV Broadcasting. 
                    Also, I taught most subjects in 6th grade. 
                    I did some project managing and was trusted to make important decisions. 
                    Currently, I am finishing up a Full Stack Web Developer Bootcamp. 
                    I like to design websites that have a Coolors color palette.
                    I have used Bootstrap and Tailwind CSS for styling.
                    However, I'm open to learning new technologies and frameworks.
                    An attractive and appealing websites means more that customers will want to use and come back to your website!
                    In my free time, I work on my own genealogy-connected YouTube Channel, lead hiking groups 
                    and research genealogy. If you are looking for a remote front-end web developer, 
                    then I could be the right fit for you and your company! I will be done with Bootcamp this June 2023!
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

