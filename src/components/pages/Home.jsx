import React from 'react';

const Home = ({handlePageChange}) => {
    return (
        <div
            name="home"
            className="h-screen w-full"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="small-screen hidden">
                    <h1>
                        <h4 className="subtitle text-4xl sm:text-7xl font-bold text-white">Welcome, I am</h4>
                        <h1>Chel Freitas</h1>
                        <h2 className="subtitle">Full Stack Web Developer</h2>
                        <p className="text-2xl sm:text5xl">
                            I have experience with teaching science, computer graphic arts, and introductory coding.
                            I enjoy working with front end development the most.
                        </p>
                    </h1>
                    {/* Later a-tag */}
                    <a href="#portfolio" onClick={handlePageChange("Portfolio")}>Portfolio</a>
                </div>
                <div className="picture rounded-2xl mx-auto w-2/3 md:w-full">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/picture-of-me.png`}
                        alt="Me"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;