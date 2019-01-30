import React, { Component } from "react";

import { CharacterListView } from "./views";
import { fetchChars } from './actions';

import "./styles/App.css";

class App extends Component {
  componentDidMount() {
    fetchChars();
  }
  render() {
    return <CharacterListView />;
  }
}

export default App;
