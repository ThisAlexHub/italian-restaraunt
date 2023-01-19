import React from 'react';
import dish from '../images/dish.png';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="about">
            <div className="info">
                <h1>Little Lemon</h1>
                <p>Chicago</p>
                <article className="discription">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twists.</article>
                <Link to="/reservations">
                    <button className="reserve" aria-label="On Click">Reserve a Table</button>
                </Link>

            </div>

            <div className="image">
                <img src={dish} alt="dish"/>
            </div>

            
        </section>
    );
};

export default About;