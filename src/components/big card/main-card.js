import React, { Component } from 'react';
import '../../App.css';

const MainCard = (props) => {
    return(
        <div className="main-card">
            <img src="https://pbs.twimg.com/media/EggDXDPUMAAvblF.jpg" alt="Fenneko using VR to play VR Unicorn"></img>
            <div className={props.styling}>{props.pill}</div>
            <h1 className="title">{props.title}</h1>
            <p className="paragraph">{props.summary}<a href="https://www.google.com"> Send Blackmail to the mean CEO</a></p>      
        </div>
    );
}

export default MainCard;