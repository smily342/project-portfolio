import React from "react";
import arrow from "../assets/arrow.svg";
import profile from "../assets/profile.jpg";

export const Introduction = () => {
    return (
        <section className="intro">
            <h1 className="name">Brian Dadi</h1>
            <p className="role">Frontend Developer</p>
            <img className="avatar" src={profile} alt="Brian Dadi" />
            <p className="bio">
            I worked in customer service for several years, and with the evolution of technology, it sparked a curiosity for coding, leading me to explore new horizons.
            </p>
            <img className="arrow" src={arrow} alt="arrow to show to scroll down" />
        </section>
    );
};
