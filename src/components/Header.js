import React from 'react';

function Header({currentPage, handlePageChange }) {
    return (
        <section className="hero is-success">
            <div className="hero-body">
                <p class="title">
                    Stephen Thompson
                </p>
                <p class="subtitle">
                    Web Developer and Mathematician
                </p>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-line'}
                        >
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-line'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-line'}
                        >
                            Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-line'}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Header;