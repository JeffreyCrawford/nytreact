import React, { Component } from "react";
import "./Jumbotron.css";


class Jumbotron extends Component {
    render() {
        return(
            <div>
                <div className="jumbotron text-center">
                <div className="overlay">
                </div>
                <div className="background-image">
                </div>
                <div className="caption">
                    <h1>Mongo Scraper</h1>
                    <p>New York Times Edition</p>
                </div>
                </div>
                <div className="container-fluid article-container">
                </div>
            </div>
        )
    }
}

export default Jumbotron;