import React, { Component } from "react";
import "../Fetch"
import "./Search.css";


class Search extends Component {
    render() {
        return(
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Search</h5>

                            <form>
                                <div className="form-group">
                                    <label htmlFor="topic">Topic</label>
                                    <input type="text" className="form-control" id="topic" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Start Year</label>
                                    <input type="number" className="form-control" id="startyear"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">End Year</label>
                                    <input type="number" className="form-control" id="endyear"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default Search;