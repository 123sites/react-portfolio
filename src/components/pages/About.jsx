import React, { useState, useEffect } from 'react';
import Avatar from '../../images/picture-of-me.png'
import { Link } from 'react-router-dom';
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
            <div className="max-w-screen-xl mx-auto flex flex-col justify-center text-center pt-10 tracking-widest sm:align-content:center">
                <div>
                </div>
                <div className=" bg-stone-100 rounded drop-shadow-2xl tracking-widest mx-9 border-8 border-orange-500">
                    <h1 className="subtitle text-4xl font-bold text-orange-500 m-3">Welcome!</h1>
                    <h2 className="subtitle text-2xl font-extrabold text-blue-800 p-2 mx-2">I am a Full Stack Web Developer.</h2>
                    <p className="text-xl text-blue-800 font-bold mx-2 p-2">
                        After teaching, I decided to make a career change from teaching to web development!
                        I like to design websites that have a Coolors color palette.
                        Attractive and appealing websites means more customers will want to use and come back to your website!
                        If you are looking for a remote front-end web developer, then I could be the right fit for you and your company!
                    </p>
                    <div className="subtitle mb-3 text-4xl font-bold tracking-widest text-orange-500 animate-pulse space-x-4">
                        <Link to="/react-portfolio/portfolio">Portfolio</Link>
                    </div>
                </div>
                <div className="md:grid md:gap-0 md:grid-cols-2 items-baseline">

                    <div className="aspect-video">
                        <iframe src="https://www.youtube.com/embed/MuiZKK-X4xU" title="YouTube video player"
                            frameborder="0"
                            allowfullscreen
                            class="mt-14 mx-auto md:w-4/5 md:h-4/5 md:ml-28 sm:m-5 sm:w-full sm:h-auto sm:px-4"
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