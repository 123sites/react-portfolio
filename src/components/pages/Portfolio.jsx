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
            link: `https://fathomless-gorge-67746.herokuapp.com/`,
            repo: `https://github.com/123sites/Ballot-Box`,
            title: 'Ballot-Box',
            description: `Ballot-Box is a polling tool to use for a democratic means of reaching a majority agreed solution.  This is a
            one-stop solution for real-time polliing.  Easily create custom polls, share them globally, and gain instant insights.`,
            features: `Features: JavaScript, Node, Express, Handlebars, MySQL, Chartjs,
            Sequelize, Mobile responsive, and has a Coolors color palette!`
        },
        {
            id: 2,
            src: `${process.env.PUBLIC_URL}/assets/img/Mood%20Booster.gif`,
            link: `https://github.com/123sites/Mood-Booster`,
            repo: `https://github.com/123sites/Mood-Booster`,
            title: `Mood Booster`,
            description: `Mood Booster is an App to help give you that needed boost in your mood.  The App gives you the opportunity 
            to choose either a joke or meme to help you get through the day!`,
            features: `Features: HTML, CSS, JavaScript, jQuery, API fetches, Mobile responsive.`
        },
        {
            id: 3,
            src: `${process.env.PUBLIC_URL}assets/images/Command-Line-App-Screenshot.png`,
            link: `https://github.com/123sites/Command-Line-Application`,
            repo: `https://github.com/123sites/Command-Line-Application`,
            title: `Command-Line-Application`,
            description: `This is an application that helps a business owner to view and manage the departments, roles, and employees in their company. 
            It helps them to organize and plan their business.`,
            features: `Features: Node.js JavaScript, Inquirer, MySql, Figlet and Chalk.`
        }, {
            id: 4,
            src: `${process.env.PUBLIC_URL}https://github.com/123sites/Note-App/blob/main/public/assets/images/Notes%20Written.png`,
            link: `https://vast-mountain-72625.herokuapp.com/notes`,
            repo: `https://github.com/123sites/Note-App/tree/maing`,
            title: `Note App`,
            description: `This is an application for someone to take notes, regarding what they need to do.  It allows you to add, update, and
            delete your items kept in local storage.`,
            features: `Features: JavaScript, CSS, Node.js, npm, Express, Heroku, Mobile responsive.`
        }, {
            id: 5,
            src: `${process.env.PUBLIC_URL}/assets/images/Updated-Laptop-View.png`,
            link: `https://github.com/123sites/Weather-Outlook`,
            repo: `https://github.com/123sites/Weather-Outlook`,
            title: `Weather Outlook`,
            description: `This is a weather app that provides current and future weather outlook for different cities.`,
            features: `Features: HTML, CSS, JavaScript, jQuery, API, Bootstrap, Mobile responsive.`
        }, {
            id: 6,
            src: ``,
            link: `https://github.com/123sites/Quick-Code-Quiz`,
            repo: `https://github.com/123sites/Quick-Code-Quiz`,
            title: `Quick-Code-Quiz`,
            description: `This is a timed quiz that uses JavaScript fundamentals and stores high scores.`,
            features: `Features: HTML, CSS, JavaScript, jQuery, Bootstrap, Mobile responsive`
        },
    ];

    return (
        <div className="container" id="portfolio">
            <div className="row justify-description-center">
                {portfolios.map(project => (
                    <div className="" key={project.id}>
                        <div className="">
                            <div className="imageBox">
                                <img src={project.src} className="card-img-top border-bottom" />
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
            </div>
        </div>
    )
}
export default Portfolio

