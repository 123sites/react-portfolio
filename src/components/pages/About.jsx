import React, { useState, useEffect } from 'react';
import Avatar from '../../images/picture-of-me.png'
const About = ({ handlePageChange }) => {
    const [currentPath, setCurrentPath] = useState("");
    // runs when a component renderes in the browser
    useEffect(() => {
        console.log(currentPath)
        setCurrentPath(window.location.pathname)
    }, [])

    return (
        <div
            name="about"
            className="w-full mb-5"
        >
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center pt-10 px-1 md:flex-col tracking-widest">
                <div>
                    <h1 className="subtitle sm:text-4xl font-bold text-orange-300 mt-3">Welcome!</h1>
                    <h2 className="subtitle sm:text-2xl font-bold text-stone-100 mt-3 mb-3">I am a Full Stack Web Developer</h2>
                    <p className="text-xl text-stone-100 sm:text2xl mb-5">
                        After teaching, I decided to make a career change from teaching to web development!
                        I like to design websites that have a Coolors color palette.
                        Attractive and appealing websites means more customers will want to use and come back to your website!
                        If you are looking for a remote front-end web developer, then I could be the right fit for you and your company!
                    </p>
                    <div className="subtitle sm:text-4xl font-bold tracking-widest text-orange-300 animate-pulse space-x-4">
                        <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>Portfolio</a>
                    </div>
                </div>
                <div>
                    <img src={Avatar}
                        alt="Me"
                        className="picture rounded-lg mx-auto w-1/2 shadow-2xl mt-5"
                    />
                    <iframe src="https://www.youtube.com/watch?v=MuiZKK-X4xU" title="YouTube video player" frameborder="0"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>

                    {/* <img src="../images/laptop.jpg"></img> */}
                </div>
            </div>
        </div>
    )
}

export default About;