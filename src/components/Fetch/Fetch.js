import React from "react";
import "./Fetch.css"
import articles from "../Scrape"




const Article = props => {
    return (
        <div className="articleContainer">
            {props.articles.map(articles => (



                <div className="card text-center">
                    <div className="card-header">
                    <h2>{articles.head}</h2>
                    </div>
                    <div className="card-body">{articles.sum}</div>
                    <div className="card-body">{articles.url}</div>
                </div>

            ))}
        </div>
    )
}


export default Article