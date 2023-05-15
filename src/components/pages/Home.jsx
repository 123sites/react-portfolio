import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <h4 className="subtitle">Welcome, I am</h4>
                    <h1>Chel Freitas</h1>
                    <h2 className="subtitle">Full Stack Web Developer</h2>
                    <p className="py-4 max-w-md">
                        I have experience with teaching science, computer graphic arts, and introductory coding.
                        I enjoy working with front end development the most.
                    </p>
                </h1>
                {/* Later a tag */}
                <button>More Info</button>
            </div>
            <div className="picture">
                <img src={`${process.env.PUBLIC_URL}/assets/images/picture-of-me.png`}
                    alt="Me"
                />
            </div>
        </div>
    )
}

export default Home;