import React, { Component } from 'react';
import '../../App.css';

const Card = (props) => {
    return(
        <div className="card">
            <img src="https://static.wikia.nocookie.net/aggretsuko/images/e/e9/RetsukoCasual.jpg" alt=""></img>
            <div className={props.styling}>{props.pill}</div>
            <h1 className="title">{props.title}</h1>
            <p className="paragraph">{props.summary} <a href="https://google.com">Read More</a></p>
        </div>
    );
}

export default Card;