import React from 'react';
import Card from './Card'

export default function Portfolio() {
    return (
<div className="card notification is-black">

            <div className="card-content notification is-black">
            <p className="title is-4">
                            A few of my web apps
                        </p>


    
            </div>
    <div className="columns">
        <div className="column">
<div className="card notification is-danger">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://sthompsonchicago.github.io/My_portfolio/assets/bookTalkPic.png" alt="Image of Book Talk app"/>
    </figure>
  </div>


<div className="column">
    <div className="content">
    <p className="title is-4">Book Talk</p>
    <p>This is a full stack web application that allows users upload and share book 
                              reviews with friends online, 
                              to make reading a more interactive and social experience.  
    </p>
      <br/>
    </div>
  </div>
</div>


</div>










<div className="column">
<div className="card notification is-primary">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://sthompsonchicago.github.io/My_portfolio/assets/nonprofitPlanner.png" alt="Image of Nonprofit App"/>
    </figure>
  </div>


<div className="column">
    <div className="content">
    <p className="title is-4">Career Planner</p>
    <p>This web application helps the user plan a career in the nonprofit industry by looking up a list of nonprofits (and other relevant information) for a chosen city.
    </p>
      <br/>
    </div>
  </div>
</div>


</div>










<div className="column">
<div className="card notification is-warning">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://sthompsonchicago.github.io/My_portfolio/assets/planner.png" alt="Image of Day Planner app"/>
    </figure>
  </div>


<div className="column">
    <div className="content">
    <p className="title is-4">Day Planner</p>
    <p>This web application helps the user plan their work day.
    </p>
      <br/>
    </div>
  </div>
</div>


</div>



</div>


</div>

    );
}