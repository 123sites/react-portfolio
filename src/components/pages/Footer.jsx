import React from 'react';


const Footer = () => {
    return (
        <footer className="text-center">
            <a target="_blank" rel="noopener noreferrer" href="www.linkedin.com/in/chel-freitas-web-developer">
                <i className="fab fa-linkedin text-white m-2"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
                <i className="fab fa-github m-2"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:">
                <i className="fas fa-envelope text-white m-2"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="/assets/images/.pdf">
                <i className="fas fa-file-pdf text-white m-2"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
                <i className="fas fa-phone-volume text-white mt-3"></i>
            </a><p className="text-white text-center m-5">2023 Copyright © Chel Freitas</p>
        </footer>
    )
}

export default Footer