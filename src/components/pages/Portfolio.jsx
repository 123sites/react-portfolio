import React from "react";
import BallotBox from "../../images/Main-Page.png";
import BarkBuddy from "../../images/barkbuddy.png";
import weatherOutlook from "../../images/weatherImage.png";
import WorkDay from "../../images/WorkDay.png";
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
            features: `Features: JavaScript, Node, Express, Handlebars, MySQL, Chartjs, Sequelize, Mobile responsive, and has a Coolors color palette.`
        },
        {
            id: 2,
            src: BarkBuddy,
            link: `https://cf-bark-buddy.herokuapp.com`,
            repo: `https://github.com/123sites/bark-buddy`,
            title: `Bark Buddy`,
            description: `There are many different dogs, but which one is for you?  Narrow down your search with a quick quiz and then browse for adoptable dogs through our Pick a Pooch search! You can even find a shelter and donate!`,
            features: `Features: MERN, Bootstrap, advanced CSS using variables, Coolors color palette, light and dark mode, Express, JWT, ESLint, and mobile responsive.`
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
            src: WorkDay,
            link: `https://123sites.github.io/Work-Day-Planner/`,
            repo: `https://github.com/123sites/Work-Day-Planner`,
            title: `Work Day Planner`,
            description: `This will help you schedule out your day!`,
            features: `Features: JavaScript, CSS, saves to local storage, color-coded time blocks, and it's Mobile responsive.`
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
                    <div className="m-5 rounded-lg md:w-1/4 md:flex-row sm:w-full sm:flex-col bg-stone-100" key={project.id}>
                        <div className="projectContent">
                            <div className="imageBox h-90">
                                <img src={project.src} className="card-img-top border-bottom w-full h-full object-fill" alt="Ballot Box website." />
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

                                <div className="gitHubLinks position-absolute p-5 animate-pulse mt-3 rounded text-center scale-150">
                                    <a href={project.link} target="_blank" className="btn rounded hover:bg-orange-500 p-3 m-1 hover:text-stone-100 active:bg-orange-500 active:text-stone-100 place-content-center" rel="noopener noreferrer">
                                        <i className="fas fa-laptop-code"></i></a>
                                    <a href={project.repo} target="_blank" className="btn rounded hover:bg-orange-500 p-3 m-1 hover:text-stone-100 active:bg-orange-500 active:text-stone-100 place-content-center" rel="noopener noreferrer">
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

