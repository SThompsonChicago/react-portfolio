import React from 'react';

const styles = {
  hov: {
    cursor: 'pointer',
  },
  right: {
    float: "right",
  },
  space: {
    margin:"5px",
  },
}

function Header({currentPage, handlePageChange }) {
    return (
        <div>
        <section className="hero notification is-link">
            <div className="hero-head">
            <header className="navbar" style={styles.right}>

<a className="button is-black"
  style={styles.space}
    href="#home"
    onClick={() => handlePageChange('Home')}
    >
      <span>Home</span>
    </a>
    <a className="button is-black"
    style={styles.space}
    href="#portfolio"
    onClick={() => handlePageChange('Portfolio')}
    >
      <span>Portfolio</span>
    </a>
    <a className="button is-black"
    style={styles.space}
    href="#contact"
    onClick={() => handlePageChange('Contact')}
    >
      <span>Contact</span>
    </a>

</header>
  </div>
            <div className="hero-body">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64"
                    style={styles.hov}
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    >
        <img src="https://sthompsonchicago.github.io/My_portfolio/assets/Me.png" alt="Image" className="is-rounded"/>
      </figure>                
      </div>
      <div className="media-content">
                <p className="title">
                    Stephen Thompson
                </p>
                <p className="subtitle">
                    Web developer and mathematician
                </p>
</div>
                </article>
                </div>
        </section>
        </div>
    );
}

export default Header;