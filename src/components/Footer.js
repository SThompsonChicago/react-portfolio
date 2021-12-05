import React from 'react';

const styles = {
    space: {
        margin:"5px",
    },
    top: {
        borderTop:"0px",
    },
    arr: {
      cursor: 'default',
    },
    center: {
        float: "center",
      }
  }

function Footer ({currentPage, handlePageChange }) {
    return (
        <div className="notification is-black">
        <footer className="footer notification is-link has-text-centered">
            <div className="button is-black" style={styles.arr}>
              <p>Created with ReactJS. </p>
              </div>
         

        </footer>
        </div>
    );
}

export default Footer;