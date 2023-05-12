import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer>
            <a target="_blank" rel="noopener noreferrer" href="www.linkedin.com/in/chel-freitas-web-developer">
                <i class="fab fa-linkedin"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="">
                <i class="fab fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:">
                <i class="fas fa-envelope"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="/assets/images/.pdf">
                <i class="fas fa-file-pdf"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="">
                <i class="fas fa-phone-volume"></i>
            </a><p>Copyright © Chel Freitas</p>
        </footer>
    )
}

export default Footer