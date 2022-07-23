import React, { Component } from 'react';
import '../../App.css';
import { CardContent } from './cardContent';

const Card = (props) => {
    return(
        <div className="card">
            <img src="https://static.wikia.nocookie.net/aggretsuko/images/e/e9/RetsukoCasual.jpg" alt=""></img>
            <div className="pill-red">This is a pill</div>
            <h1 className="title">This is a title of some sort.</h1>
            <p className="paragraph">This is a text of some sort. Kind of like a preview on what the news will be about. <a href="https://google.com">Read More</a></p>
        </div>
    );
}

export default Card;