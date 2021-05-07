import React from 'react';
import {Button} from "./Button";
import "../App.css";
import "./HeroSection.css";


function HeroSection() {
    return (
        <div  className="hero-container">
            <video src="../videos/video-1.mp4" autoPlay loop muted/>  
            <h1> Andromeda Tours </h1>
            <p className="p">Travels so otherworldly , feels like its Galaxies away! </p>
            <div className="hero-btns">
<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
    Start the process
</Button>
<Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
    Preview<i class="fas fa-angle-double-right"/>
</Button>
            </div>
        </div>
    )
}

export default HeroSection
