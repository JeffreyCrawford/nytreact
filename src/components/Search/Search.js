import React, { Component } from "react";
import "./Search.css";


class Search extends Component {
    render() {
        return(
            <div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Search</h5>

                            <form>
                                <div class="form-group">
                                    <label for="topic">Topic</label>
                                    <input type="text" class="form-control" id="topic" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Start Year</label>
                                    <input type="number" class="form-control" id="startyear"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">End Year</label>
                                    <input type="number" class="form-control" id="endyear"/>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default Search;