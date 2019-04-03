import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>CMPS 415 - Integrated	Technologies	for	Enterprise	Systems</h1>
        <p>By Dr John Burris</p>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
);

export default HomePage;
