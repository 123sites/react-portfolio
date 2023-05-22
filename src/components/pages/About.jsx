import React, {useState, useEffect} from 'react';
import Avatar from '../../images/picture-of-me.png'
const About = ({ handlePageChange }) => {
    const [currentPath, setCurrentPath] = useState("");
    // runs when a component renderes in the browser
    useEffect(()=>{
        console.log(currentPath)
        setCurrentPath(window.location.pathname)
    },[])

    return (
        <div
            name="about"
            className="h-screen w-full "
        >
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center pt-10 px-1 md:flex-col tracking-widest">
                <div>
                        <h1 className="subtitle sm:text-5xl font-bold text-orange-300 mt-3">Welcome!</h1>
                        <h2 className="subtitle sm:text-2xl font-bold text-stone-100 mt-3 mb-3">I am a Full Stack Web Developer</h2>
                        <p className= "text-2xl text-stone-100 sm:text2xl mb-5">
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
                    <div class="subtitle sm:text-4xl font-bold tracking-widest text-orange-300 dark:md:hover:bg-blue-900 ">
                    {/* Later a-tag */}
                    <a href="#portfolio" onClick={()=>handlePageChange("Portfolio")}>Portfolio</a>
                    </div>
                </div>
                <div className="picture rounded-xl mx-auto w-1/2 shadow-2xl mt-5">
                    <img src={Avatar}
                        alt="Me"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;