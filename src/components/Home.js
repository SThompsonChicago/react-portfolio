import React from 'react';

const styles = {
  a: {
    textDocaration: 'none',
  },
};

export default function Home({currentPage, handlePageChange }) {
    return (
      <div>
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

<div className="card notification is-black">
        <div className="tile is-ancestor">
                <div className="tile is-parent">

                

    <article className="tile is-child notification is-primary"
    href="#portfolio"
    onClick={() => handlePageChange('Portfolio')}
    style={styles.a}
    >
      <div className="content">

        <p className="title">Portfolio</p>
        <p> Click to view web apps I've created. Including pictures, links to GitHub repositories and links to deployed applications.</p>

          <div className="content">
        </div>
      </div>
    </article>

               </div> 
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-white"
        href="#about"
        onClick={() => handlePageChange('About')}
        >
        <p className="title">About me</p>
        <p> Click to read a brief bio and overview of my skills.</p>
        </article>
        <article className="tile is-child notification is-warning"
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        >
        <p className="title">Contact</p>
        <p> Click to get in touch with me.</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-link"
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        >
        <p className="title">Resume</p>
        <p> Click to see my education, skills and work history.</p>
    
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger"
                    href="#publications"
                    onClick={() => handlePageChange('Publications')}
      >

        <p className="title">Publications</p>
        <p> Click for links to my publications in mathematics and economics journals.</p>

        <div className="content">
          
        </div>
      </article>
    </div>
  </div>
</div>
</div>
</div>
    );
}