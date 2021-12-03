import React from 'react';

export default function Card() {
    const cardStyle = {
        widtch: '25rem',
    };

    return (
        <div>
            <div className="card" style={cardStyle}>
            <img
                className="card-img-top"
                src={`https://sthompsonchicago.github.io/My_portfolio/assets/bookTalkPic.png`}
                alt="App image"
            />
            <div className="card-body">
                <h5 className="card-title">Book Talk</h5>
                <p className="card-text">Blah blah</p>
                <a href="https://book-club-chicago.herokuapp.com" className="btn btn-primary">
                    Link to deployed application.
                </a>
            </div>
            </div>
        </div>
    )
}