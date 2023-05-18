import React, {useState, useEffect} from 'react';
import Avatar from '../../images/picture-of-me.png'
const Home = ({ handlePageChange }) => {
    const [currentPath, setCurrentPath] = useState("");
    // runs when a component renderes in the browser
    useEffect(()=>{
        console.log(currentPath)
        setCurrentPath(window.location.pathname)
    },[])

    return (
        <div
            name="home"
            className="h-screen w-full"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="small-screen">
                        <h1>Chel Freitas</h1>
                        <h2 className="subtitle text-4xl sm:text-7xl font-bold text-white">Welcome, I am a</h2>
                        <h2 className="subtitle">Full Stack Web Developer</h2>
                        <p className="text-2xl sm:text5xl">
                            I have experience with teaching science, computer graphic arts, and introductory coding.
                            I enjoy working with front end development the most.
                        </p>
                    {/* Later a-tag */}
                    <a href="#portfolio" onClick={()=>handlePageChange("Portfolio")}>Portfolio</a>
                </div>
                <div className="picture rounded-2xl mx-auto w-2/3 md:w-full">
                    <img src={Avatar}
                        alt="Me"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;