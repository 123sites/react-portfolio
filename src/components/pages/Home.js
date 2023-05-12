import React from 'react';
import { Link } from 'react-router-dom';
// import './style.css';

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <h4 className="subtitle">Welcome, I am</h4>
                    <h1>Chel<span id="freitas">Freitas</span></h1>
                    <h4 className="subtitle">Full Stack Web Developer</h4>
                </h1>
                <Link to="/about">
                    <button>More Info</button>
                </Link>
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