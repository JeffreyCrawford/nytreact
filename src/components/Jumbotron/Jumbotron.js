import React, { Component } from "react";
import "./Jumbotron.css";


class Jumbotron extends Component {
    render() {
        return(
            <div>
                <div class="jumbotron text-center">
                <div class="overlay">
                </div>
                <div class="background-image">
                </div>
                <div class="caption">
                    <h1>Mongo Scraper</h1>
                    <p>New York Times Edition</p>
                </div>
                </div>
                <div class="container-fluid article-container">
                </div>
            </div>
        )
    }
}

export default Jumbotron;