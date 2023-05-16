// Import the array from project....mapped through.
// import Form from './Form';
// import PortfolioContainer from './PortfolioContainer';
import React from "react";

// import the below from images....all are .png
// import ballot-box from "";
// import mood-booster from "";
// import weather-outlook from "";
// import note-app from "";
// import command-line-applicaton from "";
// import quick-code-quiz from "";



const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: `${process.env.PUBLIC_URL}assets/images/Main-Page.png`,
            link: 'https://fathomless-gorge-67746.herokuapp.com/',
            repo: 'https://github.com/123sites/Ballot-Box',
            title: 'Ballot-Box',
            description: `Ballot-Box is a polling tool to use for a democratic means of reaching a majority agreed solution.  This is a
          one-stop solution for real-time polliing.  Easily create custom polls, share them globally, and gain instant insights.`,
            features: `Features: JavaScript, Node, Express, Handlebars, MySQL, Chartjs,
          Sequelize, Mobile responsive, and has a Coolors color palette!`
        },
        {
            id: 2,
            src: ``,
            link: '',
            repo: ``,
            title: '',
            description: `Ballot-Box is a polling tool to use for a democratic means of reaching a majority agreed solution.  This is a
          one-stop solution for real-time polliing.  Easily create custom polls, share them globally, and gain instant insights.`,
            features: `Features: JavaScript, Node, Express, Handlebars, MySQL, Chartjs,
          Sequelize, Mobile responsive, and has a Coolors color palette!`
        },
    ];

    return (
        <div className="container" id="portfolio">
            <div className="row justify-description-center">
                {portfolios.map(project => (
                    <div className="" key={project.id}>
                        <div className="">
                            <div className="imageBox">
                                <img src={project.src} className="card-img-top border-bottom"
                                    alt="Screenshot of Ballot-Box" />
                            </div>
                            <div className="">
                                <h3>{project.title}</h3>
                                <p className="">
                                   {project.description}
                                </p>
                                <p className="">
                                    <small>
                                       {project.features}
                                    </small>
                                </p>

                                <div className="gitHubLinks position-absolute">
                                    <a href={project.link} target="_blank" className="btn" rel="noreferrer">
                                        <i className="fas fa-laptop-code"></i></a>
                                    <a href={project.repo} target="_blank" className="btn" rel="noreferrer">
                                        <i className="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


                <div className="">
                    <div className="">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/Mood%20Booster.gif`} className=""
                                alt="Screenshot of Mood Booster" />
                        </div>
                        <div className="">
                            <h3>Mood Booster</h3>
                            <p className="">
                                ...
                            </p>
                            <p className="">
                                <small>
                                    Features: HTML, CSS, JavaScript, jQuery, API fetches, Mobile responsive
                                </small>
                            </p>
                            <div className="gitHubLinks position-absolute">
                                <a href="https://github.com/123sites/Mood-Booster" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/123sites/Mood-Booster" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="">
                    <div className="">
                        <img src={`${process.env.PUBLIC_URL}assets/images/Command-Line-App-Screenshot.png`} className=""
                            alt="Screenshot of Command-Line-Application" />
                        <div className="">
                            <h3>Command-Line-Application</h3>
                            <p className="">
                                <small>
                                    Features: Node.js JavaScript, Inquirer, MySql, Figlet and Chalk
                                </small>
                            </p>
                            <div className="gitHubLinks position-absolute">
                                <a href="" className="" target="_blank" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}https://github.com/123sites/Ballot-Box/blob/main/public/images/Main-Page.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Note App" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Note App</h3>
                            <p className="card-text">
                                This is an application for someone to take notes, regarding what they need to do.  It allows you to add, update, and
                                delete your items kept in local storage.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, CSS, Node.js, npm, Express, Heroku, Mobile responsive
                                </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://vast-mountain-72625.herokuapp.com/notes" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/123sites/Note-App/tree/maing" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/Updated-Laptop-View.png`} className=""
                                alt="Screenshot of Weather Outlook" />
                        </div>
                        <div className="">
                            <h3>Weather Outlook</h3>
                            <p className="">
                                This is a weather app that provides current and future weather outlook for different cities.
                            </p>
                            <p className="">
                                <small>
                                    Features: HTML, CSS, JavaScript, jQuery, API, Bootstrap, Mobile responsive
                                </small>
                            </p>
                            <div className="gitHubLinks position-absolute">
                                <a href="https://github.com/123sites/Weather-Outlook" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/123sites/Weather-Outlook" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/Image-at-Start.png`} className=""
                                alt="Screenshot of Quick Code Quiz" />
                        </div>
                        <div className="">
                            <h3>Quick Code Quiz</h3>
                            <p className="">
                                This is a timed quiz that uses JavaScript fundamentals and stores high scores.
                            </p>
                            <p className="">
                                <small>
                                    Features: HTML, CSS, JavaScript, jQuery, Bootstrap, Mobile responsive
                                </small>
                            </p>
                            <div className="gitHubLinks position-absolute">
                                <a href="https://github.com/123sites/Quick-Code-Quiz" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/123sites/Quick-Code-Quiz" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio

