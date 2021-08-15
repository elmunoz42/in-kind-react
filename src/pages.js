import React from "react";
import {HomeComp, AboutComp} from './App.js';
import {Link} from "react-router-dom";

export function Home() {
    return (
        <div className="App">
            <section>
                <nav>
                    <Link to="about">About</Link>
                </nav>
            </section>
            <HomeComp />
        </div>
        );
}

export function About() {
    return (
        <div className="App">
            <section>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
            </section>
                <AboutComp />
        </div>
    );
}