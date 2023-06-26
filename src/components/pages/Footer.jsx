import React from 'react';
import resume from "../../images/resume.pdf";

const Footer = () => {
    return (
        <footer className="text-center text-stone-100 mt-5">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chelwebdeveloper/">
                <i className="fab fa-linkedin m-2 scale-150 p-1 rounded hover:bg-orange-500 active:bg-orange-500"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/123sites?tab=repositories">
                <i className="fab fa-github m-2 scale-150 p-1 rounded hover:bg-orange-500 active:bg-orange-500"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:">
                <i className="fas fa-envelope m-2 scale-150 p-1 rounded hover:bg-orange-500 active:bg-orange-500"></i>
            </a>
            <a className="downloadLink" href={resume} target="_blank">
                <i className="fas fa-file-pdf m-2 scale-150 p-1 rounded hover:bg-orange-500 active:bg-orange-500"></i>
            </a>
            <p className="text-center m-5">2023 Copyright © Chel Freitas</p>
        </footer>
    )
}

export default Footer