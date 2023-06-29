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
            <div className="md:max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center pt-10 tracking-widest">
                <div>
                    <h1 className="subtitle md:text-4xl sm:text-5xl font-bold text-orange-400 md:mt-3 sm:mt-1">Welcome!</h1>
                    <h2 className="subtitle sm:text-2xl font-bold text-stone-100 p-3 m-3">I am a Full Stack Web Developer</h2>
                    <p className="text-xl text-stone-100 sm:text-2xl mx-4 mb-5">
                        After teaching, I decided to make a career change from teaching to web development!
                        I like to design websites that have a Coolors color palette.
                        Attractive and appealing websites means more customers will want to use and come back to your website!
                        If you are looking for a remote front-end web developer, then I could be the right fit for you and your company!
                    </p>
                    <div className="subtitle md:mb-7 sm:mb-1 sm:text-4xl font-bold tracking-widest text-orange-400 animate-pulse space-x-4">
                        <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>Portfolio</a>
                    </div>
                </div>
                <div className="md:grid md:gap-0 md:grid-cols-2 items-baseline">

                    <div className="aspect-video">
                        <iframe src="https://www.youtube.com/embed/MuiZKK-X4xU" title="YouTube video player"
                            frameborder="0"
                            allowfullscreen
                            class="md:w-3/4 md:h-3/4 mt-9 sm:w-full sm:h-auto sm:place-self:center"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                        </iframe>

                    </div>
                    <div className="flex flex-end focus:opacity-100">
                        <img src={Avatar}
                            alt="Me"
                            className="picture rounded-lg md:mx-auto md:w-2/3 mb-5 shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About;