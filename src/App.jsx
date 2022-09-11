import React, { Component } from "react";
import "./App.css";

import { robots } from "./robots";
import CardList from "./CardList";
import Searchbox from "./Searchbox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRebots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <CardList robots={filteredRebots} />
      </div>
    );
  }
}
export default App;
