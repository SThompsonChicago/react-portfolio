import React from 'react';

function Header({currentPage, handlePageChange }) {
    return (
        <div>
        <section className="hero notification is-link">
            <div className="hero-head">
    <header className="navbar">
      <div className="container">
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
          <span className="navbar-item">
          <a className="button is-black"
              href="#home"
              onClick={() => handlePageChange('Home')}
              >
                <span>Home</span>
              </a>
            </span>
          <span className="navbar-item">
          <a className="button is-black"
              href="#about"
              onClick={() => handlePageChange('About')}
              >
                <span>About</span>
              </a>
            </span>
            <span className="navbar-item">
              <a className="button is-black"
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              >
                <span>Portfolio</span>
              </a>
            </span>
            <span className="navbar-item">
              <a className="button is-black"
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              >
                <span>Resume</span>
              </a>
            </span>
            <span className="navbar-item">
              <a className="button is-black"
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              >
                <span>Contact</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>
            <div className="hero-body">
                <article className="media">
                    <div className="media-left">
                    <figure class="image is-64x64">
        <img src="https://sthompsonchicago.github.io/My_portfolio/assets/Me.png" alt="Image" className="is-rounded"/>
      </figure>                
      </div>
      <div className="media-content">
                <p className="title">
                    Stephen Thompson
                </p>
                <p className="subtitle">
                    Web Developer and Mathematician
                </p>
</div>
                </article>
                </div>
        </section>
        </div>
    );
}

export default Header;