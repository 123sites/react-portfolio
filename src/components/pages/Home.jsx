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
            <div className="max-w-screen-sm mx-auto flex flex-col items-center justify-center text-center pt-10 px-4 py-2 md:flex-col tracking-widest">
                <div className="small-screen">
                        <h1 class="text-6xl sm:text4x1 text-orange-300">Chel Freitas</h1>
                        <h2 className="subtitle text-5xl sm:text-3xl font-bold text-white mt-3">Welcome!</h2>
                        <h2 className="subtitle text-2xl sm:text-3xl font-bold text-white mt-2 mb-3">I am a Full Stack Web Developer</h2>
                        <p className= "text-2xl text-white sm:text2xl mb-5">
                            I have experience with teaching science, computer graphic arts, and introductory coding.
                            I enjoy working with front end development the most.
                        </p>
                    {/* Later a-tag */}
                    <a href="#portfolio" onClick={()=>handlePageChange("Portfolio")}>Portfolio</a>
                </div>
                <div className="picture rounded-xl mx-auto w-2/3 md:w-full shadow-2xl mt-5">
                    <img src={Avatar}
                        alt="Me"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;