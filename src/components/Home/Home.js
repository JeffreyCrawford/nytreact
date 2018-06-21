import React, { Component } from "react";
import "./Home.css";
import Header from "../Header";
import Jumbotron from "../Jumbotron";
import Search from "../Search";
import Results from "../Results";

class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <Jumbotron />
                <div class="container">
                    <Search />
                    <Results />
                </div>
            </div>
        )
    }
}

export default Home;