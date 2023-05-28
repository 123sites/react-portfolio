// Import the array from project....mapped through.
// import Form from './Form';
// import PortfolioContainer from './PortfolioContainer';
import React from "react";

// import the below from images....all are .png
import BallotBox from "../../images/Main-Page.png";
import MoodBooster from "../../images/MoodBooster.png";
import weatherOutlook from "../../images/weatherImage.png";
import NoteApp from "../../images/NotesWritten.png";
import CommandLineApp from "../../images/Command-Line-App-Screenshot.png";
import QuickCodeQuiz from "../../images/QuickCodeQuiz.png";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: BallotBox,
            link: `https://fathomless-gorge-67746.herokuapp.com/`,
            repo: `https://github.com/123sites/Ballot-Box`,
            title: 'Ballot-Box',
            description: `Ballot-Box is a polling tool to use for a democratic means of reaching a majority agreed solution.  This is a
            one-stop solution for real-time polling.  Easily create custom polls, share them globally, and gain instant insights.`,
            features: `Features: JavaScript, Node, Express, Handlebars, MySQL, Chartjs, Sequelize, Mobile responsive, and has a Coolors color palette!`
        },
        {
            id: 2,
            src: MoodBooster,
            link: `https://123sites.github.io/Mood-Booster/`,
            repo: `https://github.com/123sites/Mood-Booster`,
            title: `Mood Booster`,
            description: `Mood Booster is an App to help give you that needed boost in your mood.  The App gives you the opportunity 
            to choose either a joke or a meme to help you get through the day!`,
            features: `Features: HTML, CSS, JavaScript, jQuery, API fetches, Mobile responsive.`
        },
        {
            id: 3,
            src: CommandLineApp,
            link: `https://youtu.be/pTnL5LTORCw`,
            repo: `https://github.com/123sites/Command-Line-Application`,
            title: `Command-Line-Application`,
            description: `This is an application that helps a business owner to view and manage the departments, roles, and employees. 
            It helps them to organize and plan their business.`,
            features: `Features: Node.js JavaScript, Inquirer, MySql, Figlet and Chalk.`
        }, {
            id: 4,
            src: NoteApp,
            link: `https://vast-mountain-72625.herokuapp.com/notes`,
            repo: `https://github.com/123sites/Note-App`,
            title: `Note App`,
            description: `This is an application for someone to take notes, regarding what they need to do.  You can add, update, and delete your items kept in local storage.`,
            features: `Features: JavaScript, CSS, Node.js, npm, Express, Heroku, Mobile responsive.`
        }, {
            id: 5,
            src: weatherOutlook,
            link: `https://123sites.github.io/Weather-Outlook/`,
            repo: `https://github.com/123sites/Weather-Outlook`,
            title: `Weather Outlook`,
            description: `This is a weather app that provides current and future weather outlook for different cities.`,
            features: `Features: HTML, CSS, JavaScript, jQuery, API, Bootstrap, Mobile responsive.`
        }, {
            id: 6,
            src: QuickCodeQuiz,
            link: `https://123sites.github.io/Quick-Code-Quiz/`,
            repo: `https://github.com/123sites/Quick-Code-Quiz/`,
            title: `Quick-Code-Quiz`,
            description: `This is a timed quiz that uses JavaScript fundamentals and stores high scores.`,
            features: `Features: HTML, CSS, JavaScript, jQuery, Bootstrap, Mobile responsive`
        },
    ];

    return (
        <div className="mx-auto flex-initial" id="portfolio">
            <div className="flex flex-wrap justify-center tracking-widest cursor-pointer">
                {portfolios.map(project => (
                    <div className="m-5 rounded-lg w-1/4 flex-row bg-stone-100" key={project.id}>
                        <div className="projectContent">
                            <div className="imageBox h-90">
                                <img src={project.src} className="card-img-top border-bottom w-full h-full object-fill" />
                            </div>
                            <div className="projectDescription p-3 text-blue-800 text-lg font-bold">
                                <h3 className="mb-3 text-orange-500">{project.title}</h3>
                                <p className="mb-3">
                                    {project.description}
                                </p>
                                <p className="text-lg">
                                    <small>
                                        {project.features}
                                    </small>
                                </p>

                                <div className="gitHubLinks position-absolute p-3 animate-pulse mx-2 text-center scale-150">
                                    <a href={project.link} target="_blank" className="btn hover:bg-blue-200 active:bg-blue-200 mr-5" rel="noreferrer">
                                        <i className="fas fa-laptop-code"></i></a>
                                    <a href={project.repo} target="_blank" className="btn hover:bg-blue-200 active:bg-blue-200 place-content-center" rel="noreferrer">
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

