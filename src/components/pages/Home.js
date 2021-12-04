import React from 'react';

export default function Home({currentPage, handlePageChange }) {
    return (


        <div className="tile is-ancestor notification is-black">

<div className="tile is-parent">
    <article className="tile is-child notification is-primary">
      <div className="content">
        <p className="title">About me</p>

          <div className="content">
        </div>
      </div>
    </article>
  </div>
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-white">
          <p className="title">Web apps I've created</p>
        </article>
        <article className="tile is-child notification is-warning">
          <p className="title">My resume</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-link">
          <p className="title">Contact me</p>
    
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger">
        <p className="title">Links to my scientific publications</p>
        <div className="content">
          
        </div>
      </article>
    </div>
  </div>
</div>

    );
}